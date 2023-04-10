const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('messages')
        .setDescription('Ver el sistema de mensajes')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de mensajes')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Añadir mensajes a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad de mensajes').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deletereward')
                .setDescription('Borrar un mensaje de recompensa')
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad de mensajes').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('createreward')
                .setDescription('Crear un mensaje de recompensa')
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad de mensajes').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('The role for this reward').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Eliminar mensajes a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad de mensajes').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('show')
                .setDescription('Ver su mensaje')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rewards')
                .setDescription('Mostrar todas las recompensas de los mensajes')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leaderboard')
                .setDescription('Ver la clasificación de mensajes')
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

 