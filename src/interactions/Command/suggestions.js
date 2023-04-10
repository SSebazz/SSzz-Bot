const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestions')
        .setDescription('Gestionar las sugerencias')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de sugerencias')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('accept')
                .setDescription('Aceptar una sugerencia')
                .addStringOption(option => option.setName('id').setDescription('ID del mensaje de sugerencia').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deny')
                .setDescription('Rechazar una sugerencia')
                .addStringOption(option => option.setName('id').setDescription('ID del mensaje de sugerencia').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('send')
                .setDescription('Enviar una sugerencia')
                .addStringOption(option => option.setName('suggestion').setDescription('Su sugerencia').setRequired(true))
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

 