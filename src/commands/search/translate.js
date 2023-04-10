const Discord = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = async (client, interaction, args) => {

    const language = interaction.options.getString('language');
    const text = interaction.options.getString('text');

    translate(text, { to: language }).then(res => {
        client.embed({
            title: `${client.emotes.normal.check}・Success!`,
            desc: `He traducido lo siguiente`,
            fields: [
                {
                    name: "📥 - Entrada",
                    value: `${text}`,
                    inline: false,
                },
                {
                    name: "📤 - Salida",
                    value: `${res.text}`,
                    inline: false,
                },
            ],
            type: 'editreply'
        }, interaction);

    }).catch(err => {
        console.log(err)
        client.errNormal({
            error: "Indique un código de idioma ISO válido!",
            type: 'editreply'
        }, interaction);
    })
}

 