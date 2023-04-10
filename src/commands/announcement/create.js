const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');

    client.embed({ 
        title: `📢・Anuncio!`, 
        desc: message 
    }, channel);

    client.succNormal({
        text: `El anuncio se ha enviado correctamente!`,
        fields: [
            {
                name: `📘┆Canal`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 