const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autosetup')
        .setDescription('Deja que el bot se configure automáticamente')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de configuración automática')
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
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcome')
                .setDescription('Configurar el sistema de bienvenida')
                .addStringOption(option =>
                    option.setName('setup')
                        .setDescription('La configuración que desea')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Canal de bienvenida', value: 'welcomechannel' },
                            { name: 'Rol de bienvenida', value: 'welcomerole' },
                            { name: 'Canal de salida', value: 'leavechannel' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('customvoice')
                .setDescription('Establecer los canales de voz personalizados desde el servidor')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ticketpanel')
                .setDescription('Configurar el panel de tickets desde el servidor')
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

 