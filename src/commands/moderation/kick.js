const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const perms = await client.checkPerms({
    flags: [Discord.PermissionsBitField.Flags.KickMembers],
    perms: [Discord.PermissionsBitField.Flags.KickMembers]
  }, interaction)

  if (perms == false) return;

  const member = await interaction.guild.members.fetch(interaction.options.getUser('user').id);
  const reason = interaction.options.getString('reason') || 'No indicado';

  if (member.permissions.has(Discord.PermissionsBitField.Flags.KickMembers) || member.permissions.has(Discord.PermissionsBitField.Flags.KickMembers)) return client.errNormal({
    error: "No puedes kickear a un moderador",
    type: 'editreply'
  }, interaction);

  client.embed({
    title: `🔨・Kick`,
    desc: `Te han kickeado de **${interaction.guild.name}**`,
    fields: [
      {
        name: "👤┆Kicked por",
        value: interaction.user.tag,
        inline: true
      },
      {
        name: "💬┆Razón",
        value: reason,
        inline: true
      }
    ]
  }, member).then(function () {
    member.kick(reason)
    client.succNormal({
      text: "El usuario especificado ha sido expulsado con éxito y ha recibido una notificación!",
      fields: [
        {
          name: "👤┆Kicked usuario",
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
  }).catch(function () {
    member.kick(reason)
    client.succNormal({
      text: "El usuario en cuestión ha sido expulsado correctamente, pero no ha recibido ninguna notificación!",
      type: 'editreply'
    }, interaction);
  });
}

 