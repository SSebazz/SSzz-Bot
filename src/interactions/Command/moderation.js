const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moderation')
        .setDescription('Gestionar toda la moderación del servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de moderación')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('Ban a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('El motivo del ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Borrar mensajes')
                .addNumberOption(option => option.setName('amount').setDescription('Cantidad de mensajes').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clearuser')
                .setDescription('Borrar mensajes de usuario en un canal')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('demote')
                .setDescription('Degradar a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setDescription('Expulsar a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('El motivo de la expulsion'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lock')
                .setDescription('Bloquear un canal')
                .addChannelOption(option => option.setName('channel').setDescription('Seleccione un canal').addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lockdown')
                .setDescription('Bloquear todos los canales')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('nuke')
                .setDescription('Nukear un canal')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('softban')
                .setDescription('Softban a user')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('El motivo del ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('timeout')
                .setDescription('Tiempo de espera de un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('time').setDescription('Número de minutos').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('Motivo del tiempo de espera').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('tempban')
                .setDescription('Banear temporalmente a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('time').setDescription('Número de minutos').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('El motivo del ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unlock')
                .setDescription('Desbloquear un canal')
                .addChannelOption(option => option.setName('channel').setDescription('Seleccione un canal').addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unban')
                .setDescription('Desbanear a un usuario')
                .addStringOption(option => option.setName('user').setDescription('Id del usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('banlist')
                .setDescription('Obtener todos los usuarios baneados')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('warn')
                .setDescription('Advertir a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addStringOption(option => option.setName('reason').setDescription('El motivo de la advertencia').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unwarn')
                .setDescription('Desadvertir a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addIntegerOption(option => option.setName('case').setDescription('Número de caso').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('warnings')
                .setDescription('Ver las advertencias de un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
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

 