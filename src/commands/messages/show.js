const Discord = require('discord.js');

const Schema = require("../../database/models/messages");

module.exports = async (client, interaction, args) => {
    let user = interaction.options.getUser('user') || interaction.user;

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {
            client.embed({
                title: "💬・Mensajes",
                desc: `**${user.tag}** tiene \`${data.Messages}\` mensajes`,
                type: 'editreply'
            }, interaction)
        }
        else {
            client.embed({
                title: "💬・Mensajes",
                desc: `**${user.tag}** tiene \`0\` mensajes`,
                type: 'editreply'
            }, interaction)
        }
    });
}

 