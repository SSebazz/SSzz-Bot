const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");
    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    client.embed({
        title: `${client.emotes.normal.arrowUp}・Tiempo de actividad`,
        desc: `Ver el tiempo de actividad de Bot`,
        fields: [
            {
                name: "⌛┇Tiempo de actividad",
                value: `${duration}`,
                inline: true
            },
            {
                name: "⏰┇Desde",
                value: `<t:${upvalue}>`,
                inline: true
            }
        ],
        type: 'editreply'
    }, interaction)
}

 