const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tools')
        .setDescription('Utiliza algunas herramientas geniales')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de herramientas')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('anagram')
                .setDescription('Formar una palabra con determinadas letras')
                .addStringOption(option => option.setName('word').setDescription('La palabra que desea formar').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('button')
                .setDescription('Crear un botón')
                .addStringOption(option => option.setName('url').setDescription('La url del botón').setRequired(true))
                .addStringOption(option => option.setName('text').setDescription('El texto del botón').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('calculator')
                .setDescription('Calcular una suma')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('decode')
                .setDescription('Decodificar código binario a texto')
                .addStringOption(option => option.setName('code').setDescription('El código binario que desea descodificar').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('emojify')
                .setDescription('Convertir texto en emojis')
                .addStringOption(option => option.setName('text').setDescription('El texto que desea convertir').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('encode')
                .setDescription('Codificar texto en código binario')
                .addStringOption(option => option.setName('text').setDescription('El texto que desea codificar').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('enlarge')
                .setDescription('Ampliar un emoji')
                .addStringOption(option => option.setName('emoji').setDescription('El emoji que quieres ampliar').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('mcskin')
                .setDescription('Ver la skin de un usuario de minecraft')
                .addStringOption(option => option.setName('name').setDescription('El nombre de usuario del jugador').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('mcstatus')
                .setDescription('Ver el estado de un servidor minecraft')
                .addStringOption(option => option.setName('ip').setDescription('La ip del servidor mc').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pwdgen')
                .setDescription('Generar una contraseña')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('qrcode')
                .setDescription('Envía una foto qrcode del texto que has dado')
                .addStringOption(option => option.setName('text').setDescription('El texto que desea convertir').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remind')
                .setDescription('Establecer un recordatorio')
                .addStringOption(option => option.setName('time').setDescription('La hora de su recordatorio').setRequired(true))
                .addStringOption(option => option.setName('message').setDescription('El mensaje para su recordatorio').setRequired(true))

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('sourcebin')
                .setDescription('Subir el código a la papelera de fuentes')
                .addStringOption(option => option.setName('language').setDescription('El lenguaje de su código').setRequired(true))
                .addStringOption(option => option.setName('code').setDescription('Su código').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('url')
                .setDescription('Hacer una url corta')
                .addStringOption(option => option.setName('site').setDescription('El enlace al sitio web').setRequired(true))
                .addStringOption(option => option.setName('code').setDescription('El código de la url').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('review')
                .setDescription('Escriba un comentario')
                .addNumberOption(option => option.setName('stars').setDescription('El número de estrellas (máx. 5)').setRequired(true))
                .addStringOption(option => option.setName('message').setDescription('Una pequeña descripción con la reseña'))
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

 