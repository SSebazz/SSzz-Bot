const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('report')
        .setDescription('Reportar de un error o usuario a los desarrolladores')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('El tipo de reporte')
                .setRequired(true)
                .addChoices(
                    { name: 'Bug', value: 'bug' },
                    { name: 'Usuario', value: 'user' }
                )
        )
        .addStringOption(option =>
            option.setName('description')
                .setDescription('Descripción con su reporte')
                .setRequired(true)
        )
    ,

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const webhookClient = new Discord.WebhookClient({
            id: client.webhooks.bugReportLogs.id,
            token: client.webhooks.bugReportLogs.token
        });

        const type = interaction.options.getString('type');
        const desc = interaction.options.getString('description');

        if (type == "bug") {
            const embed = new Discord.EmbedBuilder()
                .setTitle(`📣・Nuevo reporte de error!`)
                .addFields(
                    { name: "Categoría de informe", value: "Bug", inline: true },
                    { name: "Presentado por", value: `${interaction.user.tag}`, inline: true },
                )
                .setDescription(`${desc}`)
                .setColor(client.config.colors.normal)
            webhookClient.send({
                username: '@SSzzBot Bug-Report',
                embeds: [embed],
            });

            client.succNormal({
                text: `Error enviado con éxito a los desarrolladores!`,
                type: 'ephemeraledit'
            }, interaction);
        }
        else if (type == "user") {
            const embed = new Discord.EmbedBuilder()
                .setTitle(`📣・Reporte de nuevo usuario!`)
                .addFields(
                    { name: "Categoría de informe", value: "User", inline: true },
                    { name: "Presentado por", value: `${interaction.user.tag}`, inline: true },
                )
                .setDescription(`${desc}`)
                .setColor(client.config.colors.normal)
            webhookClient.send({
                username: '@SSzzBot Bug-Report',
                embeds: [embed],
            });

            client.succNormal({
                text: `¡Informe de usuario enviado correctamente a los desarrolladores!`,
                type: 'ephemeraledit'
            }, interaction);
        }
    },
};

 