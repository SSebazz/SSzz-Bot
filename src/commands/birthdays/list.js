const Discord = require('discord.js');

const Schema = require("../../database/models/birthday");

module.exports = async (client, interaction, args) => {
    const rawBirthdayboard = await Schema.find({ Guild: interaction.guild.id })

    if (rawBirthdayboard.length < 1) return client.errNormal({ 
        error: "No se han encontrado cumpleaños!",
        type: 'editreply' 
    }, interaction);

    const lb = rawBirthdayboard.map(e => `${client.emotes.normal.birthday} | **<@!${e.User}>** - ${e.Birthday} `);

    await client.createLeaderboard(`🎂・Cumpleaños - ${interaction.guild.name}`, lb, interaction);
}

 