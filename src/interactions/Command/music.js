const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('music')
        .setDescription('Reproducir música en Bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('bassboost')
                .setDescription('Ajusta el nivel de Bassboost')
                .addStringOption(option =>
                    option.setName('level')
                        .setDescription('El nivel del bassboost')
                        .setRequired(true)
                        .addChoices(
                            { name: '0', value: '0' },
                            { name: '1', value: '1' },
                            { name: '2', value: '2' },
                            { name: '3', value: '3' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('play')
                .setDescription('Comienza la música')
                .addStringOption(option => option.setName('song').setDescription('Introduzca el nombre/url de la canción').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Borrar la cola de música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('loop')
                .setDescription('Música en bucle')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lyrics')
                .setDescription('Obtener la letra de la canción actual')
                .addStringOption(option => option.setName('song').setDescription('Introduce el nombre de la canción'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('playing')
                .setDescription('Ver qué canción está sonando ahora')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pause')
                .setDescription('Pausa la música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('previous')
                .setDescription('Reproducir canción anterior')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('queue')
                .setDescription('Ver la cola de música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('resume')
                .setDescription('Reanudar la música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('remove')
                .setDescription('Eliminar una canción de la cola')
                .addNumberOption(option => option.setName('number').setDescription('Número de canción').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('seek')
                .setDescription('Busca la música que se está reproduciendo')
                .addNumberOption(option => option.setName('time').setDescription('Hora de la nueva canción').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('shuffle')
                .setDescription('Mezclar la música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('skip')
                .setDescription('Saltar la canción actual')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('skipto')
                .setDescription('Saltar a una nueva canción')
                .addNumberOption(option => option.setName('number').setDescription('Número de canción').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('stop')
                .setDescription('Parar la música')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('volume')
                .setDescription('Ajustar el volumen de la música')
                .addNumberOption(option => option.setName('amount').setDescription('Nuevo número de volumen'))
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.checkBotPerms({
            flags: [Discord.PermissionsBitField.Flags.Connect, Discord.PermissionsBitField.Flags.Speak],
            perms: [Discord.PermissionsBitField.Flags.Connect, Discord.PermissionsBitField.Flags.Speak]
        }, interaction)

        client.loadSubcommands(client, interaction, args);
    },
};


 