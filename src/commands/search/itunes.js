const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {

    const song = interaction.options.getString('song');

    const r = await pop.itunes(song).catch(e => {
        return client.errNormal({ 
            error: "Canción no encontrada!",
            type: 'editreply'
        }, interaction)
    });

    client.embed({
        title: `🎶・${r.name}`,
        thumbnail: r.thumbnail,
        url: r.url,
        fields: [
            {
                name: "💬┇Nombre",
                value: `${r.name}`,
                inline: true,
            },
            {
                name: "🎤┇Artista",
                value: `${r.artist}`,
                inline: true,
            },
            {
                name: "📁┇Album",
                value: `${r.album}`,
                inline: true,
            },
            {
                name: "🎼┇Longitud",
                value: `${r.length}`,
                inline: true,
            },
            {
                name: "🏷️┇Género",
                value: `${r.genre}`,
                inline: true,
            },
            {
                name: "💵┇Precio",
                value: `${r.price}`,
                inline: true,
            },
            {
                name: "⏰┇Fecha de lanzamiento",
                value: `<t:${Math.round(new Date(r.release_date).getTime() / 1000)}>`,
                inline: true,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 