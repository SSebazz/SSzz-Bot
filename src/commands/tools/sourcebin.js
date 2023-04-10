const Discord = require('discord.js');
const sourcebin = require('sourcebin');

module.exports = async (client, interaction, args) => {

    const language = interaction.options.getString('language');
    const code = interaction.options.getString('code');

    const bin = await sourcebin.create(
        [
            {
                content: `${code}`,
                language: `${language}`,
            },
        ],
        {
            title: '💻・Código aleatorio',
            description: 'Este código fue cargado a través de Bot',
        },
    ).then(value => {
        client.succNormal({
            text: `Su código ha sido publicado!`,
            fields: [
                {
                    name: `🔗┇Link`,
                    value: `[Click here to see your code](${value.url})`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction);
    })

}

 