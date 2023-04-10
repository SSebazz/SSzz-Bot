const Discord = require('discord.js');

const Schema = require("../../database/models/messageRewards");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id });

    if (rawLeaderboard.length < 1) return client.errNormal({
        error: `No se han encontrado recompensas!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**${e.Messages} mensajes** - <@&${e.Role}>`);

    await client.createLeaderboard(`💬・Recompensas de mensajes - ${interaction.guild.name}`, lb, interaction);
}

 