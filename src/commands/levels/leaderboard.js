const Discord = require('discord.js');

const Schema = require("../../database/models/levels");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ guildID: interaction.guild.id }).sort(([['xp', 'descending']])).exec();

    if (!rawLeaderboard) return client.errNormal({
        error: `No se han encontrado datos!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.guildID === interaction.guild.id && i.userID === e.userID) + 1}** | <@!${e.userID}> - Nivel: \`${e.level.toLocaleString()}\` (${e.xp.toLocaleString()} xp)`);

    await client.createLeaderboard(`🆙・Niveles - ${interaction.guild.name}`, lb, interaction);
}

 