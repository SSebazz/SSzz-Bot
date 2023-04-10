const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {    
    const text = interaction.options.getString('text');

    if (text.length >= 2000) return client.errNormal({ 
        error: "No puede utilizar más de 2000 caracteres!", 
        type: 'editreply' 
    }, interaction);

    await interaction.channel.send({ content: client.removeMentions(text) }).then(() => {
        client.succNormal({
            text: `Mensaje enviado correctamente`,
            type: 'ephemeraledit'
        }, interaction)
    })
}

 