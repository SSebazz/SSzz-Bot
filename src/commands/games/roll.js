const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 6);

    client.embed({
        title: `🎲・Roll`,
        desc: `Usted rodó ${result}`,
        type: 'editreply'
    }, interaction);
}

 