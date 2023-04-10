const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Cambios",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📃┆Cambios",
                value: '15/3/2023 Dependencias actualizadas',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 
