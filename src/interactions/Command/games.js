const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('games')
        .setDescription('Jugar en Bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help') 
                .setDescription('Obtener información sobre los comandos de la categoría de juegos')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('8ball')
                .setDescription('Haz una pregunta al bot')
                .addStringOption(option => option.setName('question').setDescription('La pregunta que desea formular').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fasttype')
                .setDescription('Learn to type faster'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('music-trivia')
                .setDescription('Play music trivia')
                .addNumberOption(option => option.setName('number').setDescription('La cantidad de canciones').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('roll')
                .setDescription('Tira un dado'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rps')
                .setDescription('Juega a piedra, papel o tijera contra el robot')
                .addStringOption(option =>
                    option.setName('option')
                        .setDescription('Elige lo que quieras')
                        .setRequired(true)
                        .addChoices(
                            { name: '🪨 Piedra', value: 'rock' },
                            { name: '📃 Papel', value: 'paper' },
                            { name: '✂️ Tijeras', value: 'scissors' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('skipword')
                .setDescription('Saltar la palabra actual'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('snake')
                .setDescription('Jugar a la serpiente'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('trivia')
                .setDescription('Jugar al Trivial'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('willyoupressthebutton')
                .setDescription('Jugar Will You Press The Button'),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('wouldyourather')
                .setDescription('Juega a Preferirías'),
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

 