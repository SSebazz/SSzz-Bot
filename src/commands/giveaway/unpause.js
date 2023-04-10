const Discord = require('discord.js');
const ms = require('ms');

module.exports = async (client, interaction, args) => {
    const messageID = interaction.options.getString('message');
    const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageID);
    if (!giveaway) return client.errNormal({ error: "Este ID de mensaje no es de este guild", type: 'editreply' }, interaction)
    client.giveawaysManager.unpause(messageID).then(() => {
        client.succNormal({
            text: `Sorteo unpaused!`,
            type: 'editreply'
        }, interaction);
    }).catch((err) => {
        client.errNormal({
            error: `No puedo encontrar el sorteo de ${messageID}!`,
            type: 'editreply'
        }, interaction)
    });
}

 