const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Crear un perfil para el servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de categoría de perfil')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('create')
                .setDescription('Cree su perfil')
        ).addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Borrar su perfil')
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('profile')
                .setDescription('Ver su perfil')
                .addUserOption((option) =>
                    option.setName('user').setDescription('El usuario del que desea obtener el perfil').setRequired(false),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('aboutme')
                .setDescription('Establece tu sobre mí')
                .addStringOption(option => option.setName('text').setDescription('Introduzca un Acerca de mí').setRequired(true))
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('age')
                .setDescription('Establece tu edad')
                .addNumberOption(option => option.setName('number').setDescription('Introduzca un número').setRequired(true))
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('bday')
                .setDescription('Fija tu cumpleaños')
                .addStringOption(option => option.setName('bday').setDescription('Introduzca un cumpleaños').setRequired(true))
        )

        .addSubcommandGroup((group) =>
            group
                .setName('actor')
                .setDescription('Establece tu actor favorito')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addactor')
                        .setDescription('El actor que desea añadir')
                        .addStringOption(option => option.setName('actor').setDescription('El actor que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delactor')
                        .setDescription("El actor que desea eliminar")
                        .addStringOption(option => option.setName('actor').setDescription('El actor que desea eliminar').setRequired(true)),
                )
        ).
        addSubcommandGroup((group) =>
            group
                .setName('artist')
                .setDescription('Establece tu artista favorito')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addartist')
                        .setDescription('El artista que desea añadir')
                        .addStringOption(option => option.setName('artist').setDescription('El artista que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delartist')
                        .setDescription("El artista que desea eliminar")
                        .addStringOption(option => option.setName('artist').setDescription('El artista que desea eliminar').setRequired(true)),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('color')
                .setDescription('Elige tu color favorito')
                .addStringOption(option => option.setName('color').setDescription('El color que desea establecer').setRequired(true)),

        ).addSubcommandGroup((group) =>
            group
                .setName('food')
                .setDescription('Pon tu comida favorita')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addfood')
                        .setDescription('Los alimentos que desea añadir')
                        .addStringOption(option => option.setName('food').setDescription('Los alimentos que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delfood')
                        .setDescription("Los alimentos que desea eliminar")
                        .addStringOption(option => option.setName('food').setDescription('Los alimentos que desea eliminar').setRequired(true)),
                )
        ).addSubcommandGroup((group) =>
            group
                .setName('movie')
                .setDescription('Pon tu película favorita')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addmovie')
                        .setDescription('La película que desea añadir')
                        .addStringOption(option => option.setName('movie').setDescription('La película que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delmovie')
                        .setDescription("La película que desea eliminar")
                        .addStringOption(option => option.setName('movie').setDescription('La película que desea eliminar').setRequired(true)),
                )
        ).addSubcommandGroup((group) =>
            group
                .setName('pet')
                .setDescription('Configura tu mascota favorita')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addpet')
                        .setDescription('La mascota que desea añadir')
                        .addStringOption(option => option.setName('pet').setDescription('La mascota que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delpet')
                        .setDescription("La mascota que quieres eliminar")
                        .addStringOption(option => option.setName('pet').setDescription('La mascota que desea eliminar').setRequired(true)),
                )
        ).addSubcommandGroup((group) =>
            group
                .setName('song')
                .setDescription('Configura tu canción favorita')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addsong')
                        .setDescription('La canción que desea añadir')
                        .addStringOption(option => option.setName('song').setDescription('La canción que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delsong')
                        .setDescription("La canción que quieres eliminar")
                        .addStringOption(option => option.setName('song').setDescription('La canción que desea eliminar').setRequired(true)),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('gender')
                .setDescription('Establece tu sexo')

        ).addSubcommandGroup((group) =>
            group
                .setName('hobbies')
                .setDescription('Establece tu afición favorita')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('addhobby')
                        .setDescription('La canción que desea añadir')
                        .addStringOption(option => option.setName('hobby').setDescription('La afición que desea añadir').setRequired(true)),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('delhobby')
                        .setDescription("La afición que desea eliminar")
                        .addStringOption(option => option.setName('hobby').setDescription('La afición que desea eliminar').setRequired(true)),
                )
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('origin')
                .setDescription('Establezca su origen')
                .addStringOption(option => option.setName('country').setDescription('Introduzca un país').setRequired(true))
        ).
        addSubcommand(subcommand =>
            subcommand
                .setName('status')
                .setDescription('Establezca su estado')
                .addStringOption(option => option.setName('text').setDescription('Introducir un estado').setRequired(true))
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

 