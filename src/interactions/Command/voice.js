const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('voice')
        .setDescription('Gestionar los canales de voz')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de voz')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('limit')
                .setDescription('Limita tu canal de voz personalizado')
                .addNumberOption(option => option.setName('limit').setDescription('Enter a limit').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lock')
                .setDescription('Bloquea tu canal de voz personalizado')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rename')
                .setDescription('Cambia el nombre de tu canal de voz personalizado')
                .addStringOption(option => option.setName('name').setDescription('Nuevo nombre').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unlock')
                .setDescription('Desbloquea tu canal de voz personalizado')
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

 