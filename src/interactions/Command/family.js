const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const Schema = require("../../database/models/music");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('family')
        .setDescription('Crear una familia en Bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de categoría familiar')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('adopt')
                .setDescription('Adopte a un miembro')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Borra a tu familia!'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('disown')
                .setDescription('Repudiar a uno de sus hijos o a uno de sus padres')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('divorce')
                .setDescription('Divórciese de su pareja')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('family')
                .setDescription(`Ver quién es de la familia de alguien!`)
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(false)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('propose')
                .setDescription('Casarse con un miembro')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true)),
        ),

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

 