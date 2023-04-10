const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Ajusta el bot a tu gusto')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría config')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('levels')
                .setDescription('Activar/desactivar niveles')
                .addBooleanOption(option => option.setName('boolean').setDescription('Seleccione un booleano').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setcolor')
                .setDescription('Establecer un color de embed personalizado')
                .addStringOption(option => option.setName("color").setDescription("Introduzca un color hex").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setverify')
                .setDescription('Configurar el panel de verificación')
                .addBooleanOption(option => option.setName('enable').setDescription('Seleccione un booleano').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Seleccione un canal').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addRoleOption(option => option.setName('role').setDescription('Seleccione un rol').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('setchannelname')
                .setDescription('Establecer un nombre de canal personalizado para las estadísticas del servidor')
                .addStringOption(option => option.setName("name").setDescription("Introduzca un nombre para el canal o envíe HELP para los args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('levelmessage')
                .setDescription('Establecer el mensaje de nivel de bot')
                .addStringOption(option => option.setName("message").setDescription("Introduzca un mensaje para los niveles o envíe HELP para los args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('welcomemessage')
                .setDescription('Establecer el mensaje de bienvenida')
                .addStringOption(option => option.setName("message").setDescription("Introduzca un mensaje de bienvenida o envíe HELP para los args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leavemessage')
                .setDescription('Establecer el mensaje de despedida')
                .addStringOption(option => option.setName("message").setDescription("Introduzca un mensaje de permiso o envíe HELP para los args").setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ticketmessage')
                .setDescription('Establecer el mensaje de ticket del bot')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('Tipo de mensaje del ticker\t')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Abrir', value: 'open' },
                            { name: 'CerrarDM', value: 'close' }
                        )
                )
                .addStringOption(option => option.setName("message").setDescription("Introduzca un mensaje para el ticket").setRequired(true))
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

 