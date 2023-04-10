const Discord = require('discord.js');

const Schema = require("../../database/models/blacklist");

module.exports = async (client, interaction, args) => {
    const word = interaction.options.getString('word');

    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            if (data.Words.includes(word)) {
                return client.errNormal({ 
                    error: `Esa palabra ya existe en la base de datos!`,
                    type: 'editreply' 
                }, interaction);
            }
            if(!data.Words) data.Words = [];
            data.Words.push(word);
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Words: word
            }).save();
        }
    })

    client.succNormal({
        text: `Word está ahora en la lista negra!`,
        fields: [
            {
                name: `💬┆Palabra`,
                value: `${word}`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 