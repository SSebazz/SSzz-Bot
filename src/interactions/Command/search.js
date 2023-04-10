const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Buscar algo en Internet')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de búsqueda')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('bing')
                .setDescription('Buscar algo en Bing')
                .addStringOption(option => option.setName('name').setDescription('Su nombre de búsqueda').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ddg')
                .setDescription('Buscar algo en DuckDuckGo')
                .addStringOption(option => option.setName('name').setDescription('Su nombre de búsqueda').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('google')
                .setDescription('Buscar algo en Google')
                .addStringOption(option => option.setName('name').setDescription('Su nombre de búsqueda').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('youtube')
                .setDescription('Buscar algo en YouTube')
                .addStringOption(option => option.setName('name').setDescription('Su nombre de búsqueda').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('corona')
                .setDescription('Ver las estadísticas de Corona')
                .addStringOption(option => option.setName('country').setDescription('Introduzca un país').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand 
                .setName('crypto')
                .setDescription('Ver el valor de la criptomoneda')
                .addStringOption(option => option.setName('coin').setDescription('Introducir una moneda').setRequired(true))
                .addStringOption(option => option.setName('currency').setDescription('Introduzca una moneda').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('docs')
                .setDescription('Consulta la documentación de discord.js')
                .addStringOption(option => option.setName('name').setDescription('Su nombre de búsqueda').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('github')
                .setDescription('Obtén información sobre un usuario de github con sólo introducir su nombre de usuario')
                .addStringOption(option => option.setName('name').setDescription('Introduzca un nombre de github').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hexcolour')
                .setDescription('Obtener información de un color')
                .addStringOption(option => option.setName('color').setDescription('Introduzca un color hex').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('itunes')
                .setDescription('Busca cualquier canción en iTunes')
                .addStringOption(option => option.setName('song').setDescription('Introduce el nombre de la canción').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('npm')
                .setDescription('Obtener información sobre un paquete NPM')
                .addStringOption(option => option.setName('name').setDescription('Introduzca el nombre del paquete').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('steam')
                .setDescription('Obtener información sobre una aplicación en Steam')
                .addStringOption(option => option.setName('name').setDescription('Introduzca un nombre para la aplicación Steam').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('translate')
                .setDescription('Traducir un texto')
                .addStringOption(option => option.setName('language').setDescription('Introduzca un idioma').setRequired(true))
                .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('weather')
                .setDescription('Ver el tiempo actual')
                .addStringOption(option => option.setName('location').setDescription('Introducir un nombre de ubicación').setRequired(true))
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

 