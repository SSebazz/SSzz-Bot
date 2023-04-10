const Discord = require('discord.js');
const generator = require('generate-password');

module.exports = async (client, interaction, args) => {

    const password = generator.generate({
        length: 12,
        symbols: true,
        numbers: true
    });

    client.succNormal({ text: `He generar una contraseña y lo han enviado a su DM`, type: 'editreply' }, interaction);

    client.succNormal({
        text: `Su contraseña generada`,
        fields: [
            {
                name: "🔑┇Contraseña",
                value: `${password}`,
                inline: true,
            },
            {
                name: "👣┇Longitud",
                value: `12`,
                inline: true,
            }
        ]
    }, interaction.user)

}

 