const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const role = interaction.options.getRole('role');
  const perms = role.permissions.toArray();

  client.embed({
    title: `ℹ️・Información sobre el rol`,
    thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
    desc: `Información sobre el rol ${role}`,
    fields: [
      {
        name: 'Rol ID:',
        value: `${role.id}`,
        inline: true
      },
      {
        name: 'Nombre del rol:',
        value: `${role.name}`,
        inline: true
      },
      {
        name: 'Mencionable:',
        value: `${role.mentionable ? 'Yes' : 'No'}`,
        inline: true
      },
      {
        name: 'Permisos de rol:',
        value: `${perms.join(', ')}`
      }
    ],
    type: 'editreply'
  }, interaction)
}

   