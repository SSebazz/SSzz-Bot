const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { ChannelType } = require('discord.js');

module.exports = {

    // Meme Images

    data: new SlashCommandBuilder()
        .setName('images')
        .setDescription('Ver todas las imágenes en Bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de mensajes')
        )
        .addSubcommandGroup((group) =>
            group
                .setName('memes')
                .setDescription('Ver todos los memes en Bot')
                .addSubcommand((subcommand) =>
                    subcommand.setName('clyde').setDescription('Obtener un mensaje personalizado de Clyde')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))

                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('drake').setDescription('Crear un meme de Drake')
                        .addStringOption(option => option.setName('text1').setDescription('Introduzca un texto').setRequired(true))
                        .addStringOption(option => option.setName('text2').setDescription('Introduzca un texto').setRequired(true)),

                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('meme').setDescription('Consigue un meme al azar'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('pooh').setDescription('Crear un meme de Pooh')
                        .addStringOption(option => option.setName('text1').setDescription('Introduzca un texto').setRequired(true))
                        .addStringOption(option => option.setName('text2').setDescription('Introduzca un texto').setRequired(true)),

                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('trumptweet').setDescription('Display\' es un tweet personalizado de Donald Trump con el mensaje proporcionado')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('tweet').setDescription('Tuitea algo en twitter')
                        .addStringOption(option => option.setName('text').setDescription('Introduzca un texto').setRequired(true))
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('wasted').setDescription('GTA wasted overlay'),
                )

        )

        // Animal Images

        .addSubcommandGroup((group) =>
            group
                .setName('animals')
                .setDescription('Ver todas las imágenes de animales en Bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('bird')
                        .setDescription('Consigue un pájaro al azar'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('cat')
                        .setDescription("Consigue un gato al azar")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('dog')
                        .setDescription("Consigue un perro al azar")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('fox')
                        .setDescription("Consigue un zorro al azar")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('koala')
                        .setDescription("Consigue un koala al azar")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('panda')
                        .setDescription("Consigue un panda al azar")
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('redpanda')
                        .setDescription("Consigue un redpanda al azar")
                )
        )

        // User Images

        .addSubcommandGroup((group) =>
            group
                .setName('user')
                .setDescription('Ver todas las imágenes de los usuarios en Bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('ad')
                        .setDescription('Generar una imagen publicitaria')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres el anuncio').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('avatar')
                        .setDescription('Ver el avatar de un usuario')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres el avatar').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('banner')
                        .setDescription('Ver el banner de un usuario')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres el banner').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('bed')
                        .setDescription('Crea un meme de cama')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario con el que quieres acostarte').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('blur')
                        .setDescription('Da una imagen borrosa')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres la imagen borrosa').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('burn')
                        .setDescription('Da una imagen quemada')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que desea obtener la imagen grabada').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('clown')
                        .setDescription('Generar una imagen de payaso')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario que desea hacer un payaso').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('colorify')
                        .setDescription('Generar una imagen coloreada')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que desea obtener la imagen coloreada').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('darkness')
                        .setDescription('Da una imagen de oscuridad')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres la imagen de la oscuridad').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('facepalm')
                        .setDescription('Generar una imagen de facepalm')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres la imagen facepalm').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('greyscale')
                        .setDescription('Hacer una imagen más gris')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario al que quieres hacer más gris').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('invert')
                        .setDescription('Invertir una imagen')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario del que quieres la imagen invertida').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('kiss')
                        .setDescription('Besar a un usuario')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario al que quieres besar').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('podium')
                        .setDescription('Hacer un podio de usuarios')
                        .addUserOption((option) =>
                            option.setName('user1').setDescription('El primer usuario del podio').setRequired(true),
                        )
                        .addUserOption((option) =>
                            option.setName('user2').setDescription('El segundo usuario del podio').setRequired(true),
                        )
                        .addUserOption((option) =>
                            option.setName('user3').setDescription('El tercer usuario del podio').setRequired(true),
                        )

                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('spank')
                        .setDescription('Azotar a un usuario')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario al que quieres azotar').setRequired(true),
                        )
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('wanted')
                        .setDescription('Se busca un usuario')
                        .addUserOption((option) =>
                            option.setName('user').setDescription('El usuario que desea').setRequired(true),
                        )
                )
        )

        // Extra Images

        .addSubcommandGroup((group) =>
            group
                .setName('extra')
                .setDescription('Ver todas las imágenes adicionales en Bot')
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('car')
                        .setDescription('Consigue un coche al azar'),
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('glass')
                        .setDescription('Superpone una textura de cristal sobre una imagen'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('image').setDescription('Mostrar una imagen en un embed')
                        .addChannelOption(option => option.setName('channel').setDescription('Canal donde debe estar el embed').setRequired(true).addChannelTypes(ChannelType.GuildText))
                        .addStringOption(option => option.setName('image-url').setDescription('Introduzca la url de la imagen').setRequired(true))
                )
                .addSubcommand((subcommand) =>
                    subcommand
                        .setName('triggered')
                        .setDescription('Desencadénate'),
                )
                .addSubcommand((subcommand) =>
                    subcommand.setName('wallpaper').setDescription('Devuelve un fondo de pantalla de HDQWalls')
                        .addStringOption(option => option.setName('name').setDescription('Introduzca un nombre').setRequired(true))
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


 