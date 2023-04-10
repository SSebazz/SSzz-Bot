const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `@SSeeba.zz`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `<@455811415949705228>`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `SSzz Dev`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Discord](https://www.discord.gg/KFMQCdCDwy)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 