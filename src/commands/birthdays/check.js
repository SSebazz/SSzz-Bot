const Discord = require('discord.js');

const Schema = require("../../database/models/birthday");

module.exports = async (client, interaction, args) => {
    Schema.findOne({ Guild: interaction.guild.id, User: interaction.user.id }, async (err, data) => {
        if (!data) return client.errNormal({ 
            error: "No se ha encontrado ningún cumpleaños!",
            type: 'editreply' 
        }, interaction);

        client.embed({ 
            title: `${client.emotes.normal.birthday}・Cheque de cumpleaños`, 
            desc: `${interaction.user.username} cumpleaños es el ${data.Birthday}`,
            type: 'editreply'
        }, interaction)
    })
}

 