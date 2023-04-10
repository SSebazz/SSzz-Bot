const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('casino')
        .setDescription('Juega al casino')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de categoría del casino')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('blackjack')
                .setDescription('Juega al blackjack para ganar dinero')
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('crash')
                .setDescription('Más riesgo, más recompensa')
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roulette')
                .setDescription('Jugar a la ruleta')
                .addStringOption(option => option.setName('color').setDescription('Introduzca un color hex').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('slots')
                .setDescription('Jugar a slots')
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
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

 