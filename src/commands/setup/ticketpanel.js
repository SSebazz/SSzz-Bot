const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");

module.exports = async (client, interaction, args) => {
    const name = interaction.options.getString('name');
    const description = interaction.options.getString('description');

    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, ticketData) => {
        if (ticketData) {
            const channel = interaction.guild.channels.cache.get(ticketData.Channel);
            const button = new Discord.ButtonBuilder()
                .setCustomId('Bot_openticket')
                .setLabel(name)
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji('🎫')

            const row = new Discord.ActionRowBuilder()
                .addComponents(button)

            client.embed({
                title: name,
                desc: description,
                components: [row]
            }, channel)

            client.succNormal({
                text: `El panel de tickets se ha configurado correctamente!`,
                type: 'editreply'
            }, interaction);
        }
        else {
            client.errNormal({
                error: `Ejecute primero la configuración del tickets!`,
                type: 'editreply'
            }, interaction);
        }
    })
}

 