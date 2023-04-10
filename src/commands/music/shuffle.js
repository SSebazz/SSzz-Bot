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

    if (player.queue.size === 0) return client.errNormal({
        error: "No hay suficientes canciones aleatorias",
        type: 'editreply'
    }, interaction);

    player.queue.shuffle()

    client.succNormal({
        text: `Barajar la cola!`,
        type: 'editreply'
    }, interaction);
}

 