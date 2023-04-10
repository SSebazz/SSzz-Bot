const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const Schema = require("../../database/models/functions");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('levels')
        .setDescription('Ver el sistema de niveles')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de categoría de niveles')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setlevel')
                .setDescription('Establecer un nuevo nivel para un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('level').setDescription('Inserta el nuevo nivel').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deletereward')
                .setDescription('Borrar una recompensa de nivel')
                .addNumberOption(option => option.setName('level').setDescription('Introduzca un nivel').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('createreward')
                .setDescription('Crear una recompensa de nivel')
                .addNumberOption(option => option.setName('level').setDescription('Introduzca un nivel').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('El rol de esta recompensa').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setxp')
                .setDescription('Establecer un nuevo xp para un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad de xp').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rank')
                .setDescription('Ver su rango actual')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rewards')
                .setDescription('Mostrar todas las recompensas de nivel')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leaderboard')
                .setDescription('Ver la clasificación por niveles')
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const guild = await Schema.findOne({ Guild: interaction.guild.id });
        if (!guild.Levels) return client.errNormal({
            error: `El sistema de niveles está desactivado!`,
            type: 'ephemeral'
        }, interaction);

        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 