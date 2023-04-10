const Discord = require('discord.js');
const lyricsFinder = require("lyrics-finder");

module.exports = async (client, interaction, args) => {
    let search = "";

        const player = client.player.players.get(interaction.guild.id);

        const channel = interaction.member.voice.channel;
        if (!channel) return client.errNormal({
            error: `No estás en un canal de voz!`,
            type: 'editreply'
        }, interaction);

        if (player && (channel.id !== player?.voiceChannel)) return client.errNormal({
            error: `No estás en el mismo canal de voz!`,
            type: 'editreply'
        }, interaction);

        if (!player || !player.queue.current) return client.errNormal({
            error: "No hay canciones sonando en este servidor",
            type: 'editreply'
        }, interaction);

        if (!interaction.options.getString('song')) {
            search = player.queue.current.title;
        }
        else {
            search = interaction.options.getString('song');
        }

        let lyrics = "";

        try {
            lyrics = await lyricsFinder(search, "");
            if (!lyrics) lyrics = `No se ha encontrado ninguna letra para ${search} :x:`;
        } catch (error) {
            lyrics = `No se ha encontrado ninguna letra para ${search} :x:`;
        }

        client.embed({
            title: `${client.emotes.normal.music}・Letra para ${search}`,
            desc: lyrics,
            type: 'editreply'
        }, interaction)
}

 