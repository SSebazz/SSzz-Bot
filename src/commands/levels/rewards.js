const Discord = require('discord.js');

const Schema = require("../../database/models/levelRewards");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id });

    if (rawLeaderboard.length < 1) return client.errNormal({
        error: `No se han encontrado recompensas!`,
        type: 'editreply'
    }, interaction);

    const lb = rawLeaderboard.map(e => `**Nivel ${e.Level}** - <@&${e.Role}>`);

    await client.createLeaderboard(`🆙・Recompensas de nivel - ${interaction.guild.name}`, lb, interaction);
}

 