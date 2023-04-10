const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.ml/facts/cat`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Datos aleatorios sobre gatos`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
}

 