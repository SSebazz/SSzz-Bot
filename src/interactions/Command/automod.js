const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('automod')
        .setDescription('Gestionar el auto mod')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de configuración automática')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('antiinvite')
                .setDescription('Activar/desactivar antiinvitación')
                .addBooleanOption(option => option.setName('active').setDescription('Seleccione un booleano').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('antilinks')
                .setDescription('Activar/desactivar antilinks')
                .addBooleanOption(option => option.setName('active').setDescription('Seleccione un booleano').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('antispam')
                .setDescription('Activar/desactivar antispam')
                .addBooleanOption(option => option.setName('active').setDescription('Seleccione un booleano').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('linkschannel')
                .setDescription('Añadir un canal autorizado para enviar enlaces')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('Qué quieres hacer con el canal?')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Add', value: 'add' },
                            { name: 'Remove', value: 'remove' }
                        )
                )
                .addChannelOption(option => option.setName('channel').setDescription('Seleccione un canal').setRequired(true).addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommandGroup(group =>
            group
                .setName('blacklist')
                .setDescription('Gestionar la lista negra')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('display')
                        .setDescription('Mostrar toda la lista negra')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('add')
                        .setDescription('Añadir una palabra a la lista negra')
                        .addStringOption(option => option.setName('word').setDescription('La palabra para la lista negra').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('remove')
                        .setDescription('Eliminar una palabra de la lista negra')
                        .addStringOption(option => option.setName('word').setDescription('La palabra para la lista negra').setRequired(true))
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
            flags: [Discord.PermissionsBitField.Flags.ManageMessages],
            perms: [Discord.PermissionsBitField.Flags.ManageMessages]
        }, interaction)

        if (perms == false) return;

        client.loadSubcommands(client, interaction, args);
    },
};

 