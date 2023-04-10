const Discord = require('discord.js');

const Schema = require("../../database/models/messages");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id }).sort(([['Messages', 'descending']]));

    if (!rawLeaderboard) return client.errNormal({
        error: `No se han encontrado datos!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.Guild === interaction.guild.id && i.User === e.User) + 1}** | <@!${e.User}> - Mensajes: \`${e.Messages}\``);

    await client.createLeaderboard(`💬・Mensajes - ${interaction.guild.name}`, lb, interaction);
}

 