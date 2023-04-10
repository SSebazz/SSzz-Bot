const Discord = require('discord.js');

const Schema = require("../../database/models/family");

module.exports = async (client, interaction, args) => {

    const target = interaction.options.getUser('user') || interaction.user;

    const data = await Schema.findOne({ Guild: interaction.guild.id, User: target.id });

    client.embed({
        title: `👪・${target.username}'s Family`,
        thumbnail: target.avatarURL({ size: 1024 }),
        fields: [
            {
                name: `Socio`,
                value: `${data && data.Partner ? `<@!${data.Partner}>` : `Este usuario no está casado`}`
            },
            {
                name: `Padres`,
                value: `${data && data.Parent.length > 0 ? `${data.Parent.join(", ")}` : `Este usuario no tiene padres`}`
            },
            {
                name: `Niños`,
                value: `${data && data.Children.length > 0 ? `${data.Children.join(", ")}` : `Este usuario no tiene hijos`}`
            }
        ],
        type: 'editreply'
    }, interaction)
}

 