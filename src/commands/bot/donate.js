const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("SSzz GitHub")
                .setURL("https://github.com/SSebazz")
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: '_____ \n\nHaga clic en el siguiente botón para acceder a la página del patrocinador \n**Atención: no se requiere patrocinador**',
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: "https://github.com/SSebazz",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 