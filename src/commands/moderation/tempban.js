const Discord = require('discord.js');

const TempSchema = require("../../database/models/tempban");

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms({
    flags: [Discord.PermissionsBitField.Flags.BanMembers],
    perms: [Discord.PermissionsBitField.Flags.BanMembers]
  }, interaction)

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
  const reason = interaction.options.getString('reason') || 'No indicado';

  if (member.permissions.has(Discord.PermissionsBitField.Flags.BanMembers) || member.permissions.has(Discord.PermissionsBitField.Flags.BanMembers)) return client.errNormal({
    error: "No se puede banear a un moderador",
    type: 'editreply'
  }, interaction);

  client.embed({
    title: `🔨・Ban`,
    desc: `Ha sido baneado en **${interaction.guild.name}**`,
    fields: [
      {
        name: "👤┆Baneado por",
        value: interaction.user.tag,
        inline: true
      },
      {
        name: "💬┆Razón",
        value: reason,
        inline: true
      }
    ]
  }, member).then(async function () {
    member.ban({ reason: reason })
    client.succNormal({
      text: "El usuario especificado ha sido baneado con éxito y ha recibido una notificación.!",
      fields: [
        {
          name: "👤┆Usuario baneado",
          value: member.user.tag,
          inline: true
        },
        {
          name: "💬┆Razón",
          value: reason,
          inline: true
        }
      ],
      type: 'editreply'
    }, interaction);

    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + parseInt(interaction.options.getNumber('time')))

    await new TempSchema({
      guildId: interaction.guild.id,
      userId: member.id,
      expires,
    }).save();

  }).catch(async function () {
    member.ban({ reason: reason })
    client.succNormal({
      text: "El usuario en cuestión ha sido baneado correctamente, pero no ha recibido ninguna notificación.!",
      type: 'editreply'
    }, interaction);

    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + parseInt(interaction.options.getNumber('time')))

    await new TempSchema({
      guildId: interaction.guild.id,
      userId: member.id,
      expires,
    }).save();
  });
}

 
