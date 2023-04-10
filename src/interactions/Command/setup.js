const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Gestionar la configuración del bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de configuración')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('tickets')
                .setDescription('Configurar los tickets')
                .addChannelOption(option => option.setName('category').setDescription('Seleccione la categoría en la que deben estar los tickets').setRequired(true).addChannelTypes(ChannelType.GuildCategory))
                .addRoleOption(option => option.setName('role').setDescription('Seleccione la rol de soporte').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('El canal para el panel de tickets').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addChannelOption(option => option.setName('logs').setDescription('El canal para los registros de tickets').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('customvoice')
                .setDescription('Configurar los canales de voz personalizados')
                .addChannelOption(option => option.setName('category').setDescription('Seleccione la categoría en la que estaran los canales').setRequired(true).addChannelTypes(ChannelType.GuildCategory))
                .addStringOption(option => option.setName('channelname').setDescription('La plantilla para los nombres de los canales').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('logs')
                .setDescription('Establecer los registros del servidor')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La configuración que desea')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Server logs', value: 'serverLogs' },
                            { name: 'Level logs', value: 'levelLogs' },
                            { name: 'Boost logs', value: 'boostLogs' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('El canal para los registros').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fun')
                .setDescription('Establecer los canales de diversión desde el servidor')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La configuración que desea')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Cumpleaños', value: 'birthdays' },
                            { name: 'Chatbot', value: 'chatbot' },
                            { name: 'Reseñas', value: 'reviews' },
                            { name: 'Sugerencias', value: 'suggestions' },
                            { name: 'Starboard', value: 'starboard' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('El canal de la diversión').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('games')
                .setDescription('Establecer los canales de juego desde el servidor')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La configuración que desea')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Contando', value: 'counting' },
                            { name: 'Adivina el número', value: 'gtn' },
                            { name: 'Adivina la palabra', value: 'gtw' },
                            { name: 'Palabra serpiente', value: 'wordsnake' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('El canal del juego').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcomechannels')
                .setDescription('Configurar los canales de bienvenida')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La configuración que desea')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Canal de bienvenida', value: 'welcomechannel' },
                            { name: 'Canal de salida', value: 'leavechannel' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('El canal que desea').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcomerole')
                .setDescription('Configurar el rol de bienvenida')
                .addRoleOption(option => option.setName('role').setDescription('El rol que desea').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ticketpanel')
                .setDescription('Configurar el panel de tickets')
                .addStringOption(option => option.setName('name').setDescription('El nombre del panel de entradas').setRequired(true))
                .addStringOption(option => option.setName('description').setDescription('La descripción del panel de tickets').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deletesetup')
                .setDescription('Eliminar una configuración de Bot')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La configuración que desea')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Tickets', value: 'tickets' },
                            { name: 'Voz personalizada', value: 'customvoice' },
                            { name: 'Server logs', value: 'serverlogs' },
                            { name: 'Level logs', value: 'levellogs' },
                            { name: 'Boost logs', value: 'boostlogs' },
                            { name: 'Birthdays', value: 'birthdays' },
                            { name: 'Chatbot', value: 'chatbot' },
                            { name: 'Reseñas', value: 'reviews' },
                            { name: 'Sugerencias', value: 'suggestions' },
                            { name: 'Contando', value: 'counting' },
                            { name: 'Adivina el número', value: 'gtn' },
                            { name: 'Adivina la palabra', value: 'gtw' },
                            { name: 'Canal de bienvenida', value: 'welcomechannel' },
                            { name: 'Camal de salida', value: 'leavechannel' },
                            { name: 'Rol de bienvenida', value: 'welcomerole' },
                            { name: 'Palabra serpiente', value: 'wordsnake' }
                        )
                )
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkUserPerms({
            flags: [Discord.PermissionsBitField.Flags.Administrator],
            perms: [Discord.PermissionsBitField.Flags.Administrator]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 