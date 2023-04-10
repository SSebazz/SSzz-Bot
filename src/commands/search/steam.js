const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });

    const name = interaction.options.getString('name');

    const s = await pop.steam(name).catch(e => {
        return client.errNormal({
            error: "Aplicación no encontrada!",
            type: 'editreply'
        }, interaction)
    });

    await client.embed({
        title: `🎮・${s.name}`,
        thumbnail: s.thumbnail,
        fields: [
            {
                name: `💬┇Nombre`,
                value: `${s.name}`,
                inline: true,
            },
            {
                name: `📃┇Capital`,
                value: `${s.description}`,
                inline: false,
            },
            {
                name: "💻┇Desarrolladores",
                value: `${s.developers.join(", ")}`,
                inline: true,
            },
            {
                name: "☁┇Editores",
                value: `${s.publishers.join(", ")}`,
                inline: true,
            },
            {
                name: "🪙┇Precio",
                value: `${s.price}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction)
}

 