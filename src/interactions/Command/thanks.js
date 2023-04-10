const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('thanks')
        .setDescription('Obtenga una visión general del sistema de agradecimientos')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de agradecimiento')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('check')
                .setDescription('Ver sus agradecimientos')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('thanks')
                .setDescription('Gracias a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
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

 