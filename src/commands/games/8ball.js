const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    const question = interaction.options.getString('question');

    var antwoorden = [
        "Sí!",
        "Desgraciadamente no",
        "Tienes toda la razón.!",
        "No, lo siento..",
        "Estoy de acuerdo",
        "No idea!",
        "No soy tan listo ..",
        "¡Mis fuentes dicen que no!",
        "Es cierto",
        "Puedes confiar en ello",
        "Probablemente no",
        "Todo apunta a que no",
        "No hay duda",
        "Absolutamente",
        "No lo sé"
    ];
    var resultaat = Math.floor((Math.random() * antwoorden.length));

    client.embed({
        title: `${client.emotes.normal.ball}・8ball`,
        desc: `Consulte la respuesta a su pregunta!`,
        fields: [
            {
                name: `💬┆Su pregunta`,
                value: `\`\`\`${question}\`\`\``,
                inline: false
            },
            {
                name: `🤖┆Bot Respuesta`,
                value: `\`\`\`${antwoorden[resultaat]}\`\`\``,
                inline: false
            }
        ],
        type: 'editreply'
    }, interaction);
}

 