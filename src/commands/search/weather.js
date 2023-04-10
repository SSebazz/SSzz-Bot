const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = async (client, interaction, args) => {
    const country = interaction.options.getString('location');

    weather.find({ search: country, degreeType: 'C' }, function (error, result) {
        if (result === undefined || result.length === 0) return client.errNormal({
            error: "**Invalid** location",
            type: 'editreply'
        }, interaction);

        var current = result[0].current;
        var location = result[0].location;

        client.embed({
            title: `☀️・El tiempo - ${current.skytext}`,
            desc: `Previsión meteorológica para ${current.observationpoint}`,
            thumbnail: current.imageUrl,
            fields: [
                {
                    name: "Zona horaria",
                    value: `UTC${location.timezone}`,
                    inline: true,
                },
                {
                    name: "Tipo de titulación",
                    value: `Celsius`,
                    inline: true,
                },
                {
                    name: "Temperatura",
                    value: `${current.temperature}°`,
                    inline: true,
                },
                {
                    name: "Viento",
                    value: `${current.winddisplay}`,
                    inline: true,
                },
                {
                    name: "Se siente como",
                    value: `${current.feelslike}°`,
                    inline: true,
                },
                {
                    name: "Humedad",
                    value: `${current.humidity}%`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction)
    })
}

 