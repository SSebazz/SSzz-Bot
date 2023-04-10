const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stickymessages')
        .setDescription('Gestionar los mensajes stickers')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de stickers')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stick')
                .setDescription('Introducir un mensaje en un canal')
                .addChannelOption(option => option.setName('channel').setDescription('Seleccione un canal').setRequired(true).addChannelTypes(ChannelType.GuildText))
                .addStringOption(option => option.setName('message').setDescription('Sus mensajes sticker').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('messages')
                .setDescription('Muestra todos tus stickers')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unstick')
                .setDescription('Desvincular un mensaje de un canal')
                .addChannelOption(option => option.setName('channel').setDescription('Seleccione un canal').setRequired(true).addChannelTypes(ChannelType.GuildText))
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
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 