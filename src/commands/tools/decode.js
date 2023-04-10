const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    const code = interaction.options.getString('code');

    if (isNaN(parseInt(code))) return client.errNormal({
        error: `Sólo puedes decodificar código binario!`,
        type: 'editreply'
    }, interaction);

    let decode = code.split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');

    client.embed({
        title: `${client.emotes.normal.check}・Éxito!`,
        desc: `He descifrado el código`,
        fields: [
            {
                name: "📥 - Entrada",
                value: `\`\`\`${code}\`\`\``,
                inline: false,
            },
            {
                name: "📥 - Salida",
                value: `\`\`\`${decode}\`\`\``,
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)

}

 