const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverstats')
        .setDescription('Gestionar las estadísticas del servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de estadísticas del servidor')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('boosts')
                .setDescription('Controla el recuento de impulsos')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('tier')
                .setDescription('Controla el recuento de niveles de refuerzo')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('channels')
                .setDescription('Seguimiento del recuento de canales')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stage-channels')
                .setDescription('Lleva la cuenta de los canales del escenario')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('text-channels')
                .setDescription('Lleva la cuenta del canal de texto')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('voice-channels')
                .setDescription('Controla el recuento de canales de voz')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('news-channels')
                .setDescription('Seguimiento del recuento de canales de noticias')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('members')
                .setDescription('Controlar el número de miembros')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('bots')
                .setDescription('Seguimiento del recuento de bots')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roles')
                .setDescription('Seguimiento del recuento de roles')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('emoji')
                .setDescription('Lleva la cuenta de los emojis')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('static-emoji')
                .setDescription('Lleva la cuenta de los emoji estáticos')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('animated-emoji')
                .setDescription('Lleva la cuenta de los emoji animados')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('time')
                .setDescription('Conoce tu zona horaria actual')
                .addStringOption(option =>
                    option.setName('timezone')
                        .setDescription('La zona horaria que desea establecer (por ej, Europa/Amsterdam)')
                        .setRequired(true)
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
        const perms = await client.checkPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageChannels],
            perms: [Discord.PermissionsBitField.Flags.ManageChannels]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 