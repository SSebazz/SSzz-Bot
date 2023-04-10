
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `🎮・Tasa de jugadores épicos`,
        desc: `Usted es ${result}% jugador épico!`,
        type: 'editreply'
    }, interaction)
}

 