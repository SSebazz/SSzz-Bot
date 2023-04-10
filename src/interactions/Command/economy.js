const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('economy')
        .setDescription('Juega a la economía en tu servidor')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Obtener información sobre los comandos de categoría económica')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('additem')
                .setDescription('Añadir un elemento de rol a la tienda económica')
                .addRoleOption(option => option.setName('role').setDescription('Seleccione un rol').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('addmoney')
                .setDescription('Añadir dinero a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('balance')
                .setDescription('Consulta tu saldo')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(false))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('beg')
                .setDescription('Mendigar dinero')
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('buy')
                .setDescription('Comprar artículos en la tienda Bot')

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('clear')
                .setDescription('Despejar la economía')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('crime')
                .setDescription('Cometer un delito')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('daily')
                .setDescription('Reclama tu dinero diario')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deleteitem')
                .setDescription('Eliminar un rol del almacén económico')
                .addRoleOption(option => option.setName('role').setDescription('Seleccione un rol').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('deposit')
                .setDescription('Ingresar dinero en el banco')
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('fish')
                .setDescription('Pesca algunos peces')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hourly')
                .setDescription('Reclama tu dinero por hora')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('hunt')
                .setDescription('Cazar algunos animales')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('monthly')
                .setDescription('Reclame su dinero mensual')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pay')
                .setDescription('Pagar a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('present')
                .setDescription('Consigue un regalo semanal')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('removemoney')
                .setDescription('Retirar dinero a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuarior').setRequired(true))
                .addNumberOption(option => option.setName('amount').setDescription('Introduzca una cantidad').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rob')
                .setDescription('Robar a un usuario')
                .addUserOption(option => option.setName('user').setDescription('Seleccionar un usuario').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('store')
                .setDescription('Mostrar la tienda de este guild')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('weekly')
                .setDescription('Reclame su dinero semanal')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('withdraw')
                .setDescription('Retire su dinero')
                .addNumberOption(option => option.setName('amount').setDescription('Enter a amount').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('work')
                .setDescription('Ir a trabajar')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('yearly')
                .setDescription('Reclama tu dinero anual')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('leaderboard')
                .setDescription('Ver la clasificación económica')
                .addStringOption(option =>
                    option.setName('type')
                        .setDescription('El tipo de clasificación que desea')
                        .setRequired(true)
                        .addChoices(
                            {name: 'Cartera', value: 'money'},
                            {name: 'Banco', value: 'bank'}
                        )
                )
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

 