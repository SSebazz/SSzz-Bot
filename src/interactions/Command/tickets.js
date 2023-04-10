const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tickets')
        .setDescription('Gestione los tickets en su servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de tickets')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Añadir un usuario a un ticket')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('claim')
                .setDescription('Claimear Ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('close')
                .setDescription('Cerrar ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Eliminar ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('information')
                .setDescription('Informacion sobre un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lower')
                .setDescription('Bajar ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('create')
                .setDescription('Crear ticket')
                .addStringOption(option => option.setName('reason').setDescription('Reason to open a ticket'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('notice')
                .setDescription('Enviar una notificación a un ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('open')
                .setDescription('Reabrir ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('raise')
                .setDescription('Levante ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Eliminar un usuario de un ticket')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rename')
                .setDescription('Renombrar ticket')
                .addStringOption(option => option.setName('name').setDescription('Nuevo nombre del ticket').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('transcript')
                .setDescription('Transcribir ticket')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unclaim')
                .setDescription('Desclaimear ticket')
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

 