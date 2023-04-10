const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
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

    let number = interaction.options.getNumber('number');

    if (number > player.queue.size) return client.errNormal({
        error: `La cola no tiene tantas canciones`,
        type: 'editreply'
    }, interaction);

    const targetSong = player.queue[parseInt(number - 1)]
    player.queue.remove((parseInt(number)) - 1)

    client.succNormal({ 
        text: `Eliminado **${targetSong.title}** de la cola`,
        type: 'editreply'
    }, interaction);
}

 
