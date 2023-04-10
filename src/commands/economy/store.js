const Discord = require('discord.js');

const store = require("../../database/models/economyStore");

module.exports = async (client, interaction, args, message) => {
    store.find({ Guild: interaction.guild.id }, async (err, storeData) => {
        if (storeData && storeData.length > 0) {
            const lb = storeData.map(e => `**<@&${e.Role}>** - ${client.emotes.economy.coins} $${e.Amount} \n**Para comprar:** \`comprar ${e.Role}\``);

            await client.createLeaderboard(`🛒・${interaction.guild.name}'s Store`, lb, interaction);
            client.embed({ 
                title: `🛒・Tienda del Bot`, 
                desc: `**Caña de pescar** - ${client.emotes.economy.coins} $100 \n**Para comprar:** \`comprar caña de pescar\``, 
            }, interaction.channel);
        }
        else {
            client.errNormal({ 
                error: `No se ha encontrado ninguna tienda en este guild!`, 
                type: 'editreply' 
            }, interaction);
        }
    })

}

 