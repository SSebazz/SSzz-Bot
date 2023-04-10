const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const model = require('../../database/models/badge');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('developers')
        .setDescription('   Comandos para los desarrolladores de bots')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de la categoría de desarrolladores')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('eval')
                .setDescription('Obtener el resultado de un fragmento de código')
                .addStringOption(option => option.setName('code').setDescription('Su código').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('badge')
                .setDescription('Gestionar las insignias de los bots')
                .addBooleanOption(option => option.setName('new').setDescription('Seleccione un booleano').setRequired(true))
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addStringOption(option => option.setName('badge').setDescription('Elija su insignia').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('Gestionar los bans del bot')
                .addBooleanOption(option => option.setName('new').setDescription('Seleccione un booleano').setRequired(true))
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('credits')
                .setDescription('Gestionar los créditos del bot')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('El tipo de créditos')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Añadir', value: 'add' },
                            { name: 'Eliminar', value: 'remove' }
                        )
                )
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Cantidad de los créditos').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('args')
                .setDescription('Publicar mensajes predefinidos')
                .addStringOption(option =>
                    option.setName('message')
                        .setDescription('Seleccione un mensaje')
                        .setRequired(true)
                        .addChoices(
                            { name: 'Información', value: 'information' },
                            { name: 'Reglas', value: 'rules' },
                            { name: 'Aplicaciones', value: 'applications' },
                            { name: 'Ventajas de Booster', value: 'boosterperks' },
                            { name: 'Links', value: 'links' },
                            { name: 'Recompensas', value: 'rewards' },
                            { name: 'Nuestros robots', value: 'ourbots' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('servers')
                .setDescription('Ver todos los servidores de este fragmento')
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        model.findOne({ User: interaction.user.id }, async (err, data) => {
            if (data && data.FLAGS.includes("DEVELOPER")) {
                await interaction.deferReply({ fetchReply: true });
                client.loadSubcommands(client, interaction, args);
            } else {
                return client.errNormal({
                    error: 'Sólo los desarrolladores de Bot pueden hacerlo',
                    type: 'ephemeral'
                }, interaction)
            }
        })
    },
};

 