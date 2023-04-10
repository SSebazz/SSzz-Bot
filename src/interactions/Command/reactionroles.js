const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactionroles')
        .setDescription('Gestionar los roles de reacción del servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de roles de reacción')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Añadir un rol de reacción')
                .addStringOption(option => option.setName('category').setDescription('nombre de categoría para su grupo de roles de reacción').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('Seleccione un rol').setRequired(true))
                .addStringOption(option => option.setName('emoji').setDescription('Introduzca un emoji').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Suprimir una categoría de roles de reacción')
                .addStringOption(option => option.setName('category').setDescription('nombre de categoría para su grupo de roles de reacción').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('list')
                .setDescription('Mostrar todas las categorías de roles de reacción de este gremio')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('button')
                .setDescription('Mostrar todos los roles de reacción con botones')
                .addStringOption(option => option.setName('category').setDescription('Nombre de categoría para su grupo de roles de reacción').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Canal donde deben venir los roles de reacción').addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('menu')
                .setDescription('Mostrar todas las funciones de reacción en un menú')
                .addStringOption(option => option.setName('category').setDescription('Nombre de categoría para su grupo de roles de reacción').setRequired(true))
                .addChannelOption(option => option.setName('channel').setDescription('Canal donde deben venir los roles de reacción').addChannelTypes(ChannelType.GuildText))
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
            flags: [Discord.PermissionsBitField.Flags.ManageRoles],
            perms: [Discord.PermissionsBitField.Flags.ManageRoles]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 