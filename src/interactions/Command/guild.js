const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('guild')
        .setDescription('Gestionar el guild')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de categoría de gremio')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('channelinfo')
                .setDescription('Obtener información sobre un canal')
                .addChannelOption(option => option.setName('channel').setDescription('Select a channel').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('members')
                .setDescription('Ver cuántos miembros hay en este servidor')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('oldestmember')
                .setDescription('Obtén la fecha de creación de la cuenta más antigua del guild')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roleinfo')
                .setDescription('Obtener información sobre un rol')
                .addRoleOption(option => option.setName('role').setDescription('Seleccione un rol').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Obtener toda la información sobre el servidor actual')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stealemoji')
                .setDescription('Robar un emoji')
                .addStringOption(option => option.setName('emoji').setDescription('Introduce un emoji para robar').setRequired(true))
                .addRoleOption(option => option.setName('role').setDescription('Seleccione un rol').setRequired(false))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('youngestmember')
                .setDescription('Obtener la fecha de creación de la cuenta más joven en el guild')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('userinfo')
                .setDescription('Obtener toda la información sobre un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('inviteinfo')
                .setDescription('Obtener toda la información sobre una invitación')
                .addStringOption(option => option.setName('invite').setDescription('Introduzca un código de invitación').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('emojis')
                .setDescription('Ver los emojis del guild')
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

 