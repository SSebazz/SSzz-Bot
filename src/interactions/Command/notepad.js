const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('notepad')
        .setDescription('Gestiona tus notas')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de búsqueda')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Añade una nota a tu bloc de notas')
                .addStringOption(option => option.setName('note').setDescription('Su nota').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Borrar una nota del bloc de notas')
                .addStringOption(option => option.setName('id').setDescription('Id de la nota').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Editar una nota desde el bloc de notas')
                .addStringOption(option => option.setName('id').setDescription('Id de la nota').setRequired(true))
                .addStringOption(option => option.setName('note').setDescription('Nueva nota').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('notes')
                .setDescription('Mostrar todas tus notas')
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

 