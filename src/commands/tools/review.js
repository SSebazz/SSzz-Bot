const Discord = require('discord.js');

const Schema = require("../../database/models/reviewChannels");

module.exports = async (client, interaction, args) => {
    const stars = interaction.options.getNumber('stars');
    const message = interaction.options.getString('message') || 'Not given';

    if (stars < 1 || stars > 5) return client.errNormal({
        error: `Stars must be a minimum of 1 and a maximum of 5`,
        type: 'editreply'
    }, interaction)

    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            const channel = interaction.member.guild.channels.cache.get(data.Channel);
            if (!channel) return  client.errNormal({
                error: `No se ha establecido ningún canal de revisión. Haga \`reviewchannel\``,
                type: 'editreply'
            }, interaction);
            
            let totalStars = "";
            for (let i = 0; i < stars; i++) {
                totalStars += ":star:";
            }

            client.succNormal({
                text: "Su opinión ha sido enviada correctamente",
                fields: [
                    {
                        name: `⭐┇Stars`,
                        value: `${stars}`,
                        inline: true
                    },
                    {
                        name: `📘┇Canal`,
                        value: `<#${data.Channel}>`,
                        inline: true
                    }
                ],
                type: 'editreply'
            }, interaction);

            client.embed({
                title: `Review・${interaction.user.tag}`,
                desc: `Se ha escrito una nueva reseña!`,
                fields: [
                    {
                        name: "Stars",
                        value: `${totalStars}`,
                        inline: true,
                    },
                    {
                        name: "Note",
                        value: `${message}`,
                        inline: true,
                    },
                ]
            }, channel)

        }
        else {
            client.errNormal({
                error: `No se ha establecido ningún canal de revisión. Haga \`reviewchannel\``,
                type: 'editreply'
            }, interaction)
        }
    })
}

 