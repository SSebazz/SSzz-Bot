const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Información sobre el bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Obtener información sobre el bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setDescription('Ver los bots ping en ms')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('changelogs')
                .setDescription('Obtener los registros de cambios del bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('donate')
                .setDescription('Obtener el enlace de donación de Bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('links')
                .setDescription('Recibe un mensaje con todos los enlaces Bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('owner')
                .setDescription('Obtener información sobre el propietario')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('socials')
                .setDescription('Consigue los Bot sociales')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('support')
                .setDescription('Obtener una invitación del Servidor de asistencia')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('uptime')
                .setDescription('Mostrar el tiempo de actividad del bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('vote')
                .setDescription('Compruebe si ha votado')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('feedback')
                .setDescription('Envía tu opinión sobre el bot a los desarrolladores')
                .addStringOption(option => option.setName("feedback").setDescription("Su opinión").setRequired(true))
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

 