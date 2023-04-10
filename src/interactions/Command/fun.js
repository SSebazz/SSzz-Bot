const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fun')
        .setDescription('Ejecutar comandos divertidos en Bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtén información sobre los comandos de la categoría diversión')
        )

        // Meme Commands

        .addSubcommandGroup((group) =>
            group
                .setName('meme')
                .setDescription('Ver todos los comandos divertidos de memes en Bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('confused')
                        .setDescription('Reacciona con un meme de Nick Young confundido')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('cleverrate')
                        .setDescription('A ver cuánto listo eres')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('dinochrome')
                        .setDescription('Dinosaurio cromado')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('epicgamerrate')
                        .setDescription('Comprueba hasta qué punto eres un jugador épico')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('howgay')
                        .setDescription('Mira lo gay que eres')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('roast')
                        .setDescription('Asa a un usuario')
                        .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('simprate')
                        .setDescription('Mira qué simpático eres')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('stankrate')
                        .setDescription('Mira lo apestoso que eres')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('rickroll')
                        .setDescription('Consigue un rickroll')
                )
        )

        // User Commands

        .addSubcommandGroup((group) =>
            group
                .setName('user')
                .setDescription('Ver todos los comandos de usuario divertidos en Bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('hack')
                        .setDescription('Hackea a tus amigos o enemigos!')
                        .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('hug')
                        .setDescription('Dar un abrazo a un usuario')
                        .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('kill')
                        .setDescription('Matar a un usuario')
                        .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('lovemeter')
                        .setDescription('Ver hasta qué punto encajas con alguien')
                        .addUserOption(option => option.setName('user1').setDescription('Seleccionar un usuario').setRequired(true))
                        .addUserOption(option => option.setName('user2').setDescription('Seleccionar un usuario').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('sudo')
                        .setDescription('Decir algo como otra persona')
                        .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
        )

        // Text Commands

        .addSubcommandGroup((group) =>
            group
                .setName('text')
                .setDescription('Ver todos los comandos de texto divertidos en Bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('ascii')
                        .setDescription('Hacer texto ascii')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('gif')
                        .setDescription('Buscar un gif')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('reverse')
                        .setDescription('Invertir el texto')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('say')
                        .setDescription('Haz que el bot diga algo')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
        )

        // Extra Commands

        .addSubcommandGroup((group) =>
            group
                .setName('extra')
                .setDescription('Ver todos los divertidos comandos adicionales en Bot')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('birdfact')
                        .setDescription('Consigue un dato sobre un pájaro al azar')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('catfact')
                        .setDescription('Consigue un dato sobre gatos al azar')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('dogfact')
                        .setDescription('Obtener un hecho perro al azar')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('fact')
                        .setDescription('Obtener un dato al azar')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('koalafact')
                        .setDescription('Consigue un dato koalafact al azar')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('pandafact')
                        .setDescription('Obtener un dato pandafact aleatorio')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('token')
                        .setDescription('Obtener mi token')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('worldclock')
                        .setDescription('Muestra el reloj o relojes mundiales')
                )
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('xmas')
                        .setDescription('Ver el número de días que faltan para Navidad')
                )
        ),

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

 