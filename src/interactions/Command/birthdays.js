const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('birthdays')
        .setDescription('Ver o registrar un cumpleaños')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría cumpleaños')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('Comprueba tu cumpleaños')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Borrar tu cumpleaños')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('list')
                .setDescription('Ver todos los cumpleaños')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('set')
                .setDescription('Fija tu cumpleaños')
                .addNumberOption(option => option.setName('day').setDescription('El número del día de tu cumpleaños').setRequired(true))
                .addNumberOption(option => option.setName('month').setDescription('El número del mes de tu cumpleaños').setRequired(true))
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 