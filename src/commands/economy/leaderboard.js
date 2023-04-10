const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {
    const type = interaction.options.getString("type");

    if (type == "money") {
        const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id }).sort(([['Money', 'descending']]));

        if (!rawLeaderboard) return client.errNormal({ 
            error: "No se han encontrado datos!",
            type: 'editreply'
        }, interaction);

        const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.Guild === interaction.guild.id && i.User === e.User) + 1}** | <@!${e.User}> - ${client.emotes.economy.coins} \`$${e.Money}\``);

        await client.createLeaderboard(`🪙・Dinero - ${interaction.guild.name}`, lb, interaction);
    }
    else if (type == "bank") {
        const rawLeaderboard = await Schema.find({ Guild: interaction.guild.id }).sort(([['Bank', 'descending']]));

        if (!rawLeaderboard) return client.errNormal({ 
            error: "No se han encontrado datos!",
            type: 'editreply'
        }, interaction);

        const lb = rawLeaderboard.map(e => `**${rawLeaderboard.findIndex(i => i.Guild === interaction.guild.id && i.User === e.User) + 1}** | <@!${e.User}> - ${client.emotes.economy.bank} \`$${e.Bank}\``);

        await client.createLeaderboard(`🏦・Banco - ${interaction.guild.name}`, lb, interaction);
    }
}

 