const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const members = await interaction.guild.members.fetch();

  client.embed({
    title: `👤・Cuentidad de miembros`,
    desc: `Ver el número total de miembros en el servidor`,
    fields: [
      {
        name: `👤┆Miembros`,
        value: `${members.filter(member => !member.user.bot).size} miembros`,
        inline: true
      },
      {
        name: `🤖┆Bots`,
        value: `${members.filter(member => member.user.bot).size} bots`,
        inline: true
      },
      {
        name: `📘┆Total`,
        value: `${interaction.guild.memberCount} miembros`,
        inline: true
      }
    ],
    type: 'editreply'
  }, interaction)
}

   