const discord = require('discord.js');

module.exports = async (client, channel) => {
    let types = {
        0: "Canal de texto",
        2: "Canal de voz",
        4: "Categoría",
        5: "Canal de noticias",
        10: "Hilo de noticias",
        11: "Hilo público",
        12: "Hilo privado",
        13: "Canal Stage",
        14: "Categoría",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    console.log(channel.type)
    client.embed({
        title: `🔧・Canal creado`,
        desc: `Se ha creado un canal`,
        fields: [
            {
                name: `> Nombre`,
                value: `- ${channel.name}`
            },
            {
                name: `> ID`,
                value: `- ${channel.id}`
            },
            {
                name: `> Categoría`,
                value: `- ${channel.parent}`
            },
            {
                name: `> Canal`,
                value: `- <#${channel.id}>`
            },
            {
                name: `> Tipo`,
                value: `- ${types[channel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};