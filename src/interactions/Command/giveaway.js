const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('Organice un sorteo en su servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de regalos')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('start')
                .setDescription('Iniciar un sorteo')
                .addChannelOption(option => option.setName('channel').setDescription('Canal donde debe estar el regalo').setRequired(true).addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement))
                .addStringOption(option => option.setName('duration').setDescription('Duración del sorteo').setRequired(true))
                .addNumberOption(option => option.setName('winners').setDescription('El número de ganadores del sorteo').setRequired(true))
                .addStringOption(option => option.setName('prize').setDescription('El premio del sorteo').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('drop')
                .setDescription('Iniciar un sorteo de drop')
                .addChannelOption(option => option.setName('channel').setDescription('Canal donde debe estar el regalo').setRequired(true).addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement))
                .addStringOption(option => option.setName('duration').setDescription('Duración del sorteo').setRequired(true))
                .addNumberOption(option => option.setName('winners').setDescription('El número de ganadores del sorteo').setRequired(true))
                .addStringOption(option => option.setName('prize').setDescription('El premio del sorteo').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reroll')
                .setDescription('Volver a sortear')
                .addStringOption(option => option.setName('message').setDescription('Mensaje del sorteo ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('end')
                .setDescription('Finalizar un sorteo')
                .addStringOption(option => option.setName('message').setDescription('Mensaje del sorteo ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Editar la hora de un sorteo')
                .addStringOption(option => option.setName('message').setDescription('Mensaje del sorteo ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Eliminar un sorteo')
                .addStringOption(option => option.setName('message').setDescription('Mensaje del sorteo ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pause')
                .setDescription('Pausa un sorteo')
                .addStringOption(option => option.setName('message').setDescription('Mensaje del sorteo ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unpause')
                .setDescription('Desactivar un sorteo')
                .addStringOption(option => option.setName('message').setDescription('Mensaje del sorteo ID').setRequired(true)),
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const perms = await client.checkUserPerms({
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 