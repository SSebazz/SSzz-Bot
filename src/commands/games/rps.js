const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const option = interaction.options.getString("option");

    let options = ["piedra", "papel", "tijeras"];
    const result = options[Math.floor(Math.random() * options.length)];

    switch (option) {
        case "piedra":
            if (result == "papel") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Yo gano!`,
                type: 'editreply'
            }, interaction);

            if (result == "tijeras") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Tu Ganas!`,
                type: 'editreply'
            }, interaction);

            if (result == "piedra") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Es un empate!`,
                type: 'editreply'
            }, interaction);
            break;

        case "papel":
            if (result == "papel") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Es un empate!`,
                type: 'editreply'
            }, interaction);

            if (result == "tijeras") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Yo gano!`,
                type: 'editreply'
            }, interaction);

            if (result == "piedra") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Tu Ganas!`,
                type: 'editreply'
            }, interaction);
            break;

        case "tijeras":
            if (result == "papel") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Tu Ganas!`,
                type: 'editreply'
            }, interaction);

            if (result == "tijeras") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Es un empate!`,
                type: 'editreply'
            }, interaction);

            if (result == "piedra") return client.embed({
                title: `${client.emotes.normal.papel}・piedra papel tijeras`,
                desc: `Tengo ${result}, Yo gano!`,
                type: 'editreply'
            }, interaction);
            break;
    }
}

 