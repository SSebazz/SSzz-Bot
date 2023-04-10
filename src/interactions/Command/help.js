const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Obtener ayuda con el bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                    .setCustomId('Bot-helppanel')
                    .setPlaceholder('❌┆Nada seleccionado')
                    .addOptions([
                        {
                            label: `Comandos`,
                            description: `Mostrar los comandos de Bot!`,
                            emoji: "💻",
                            value: "commands-Bothelp",
                        },
                        {
                            label: `Invite`,
                            description: `Invita al Bot a tu servidor`,
                            emoji: "📨",
                            value: "invite-Bothelp",
                        },
                        {
                            label: `Servidor de asistencia`,
                            description: `Unirse al servidor de apoyor`,
                            emoji: "❓",
                            value: "support-Bothelp",
                        },
                        {
                            label: `Cambios`,
                            description: `Mostrar los registros de cambios del bot`,
                            emoji: "📃",
                            value: "changelogs-Bothelp",
                        },
                    ]),
            );

        return client.embed({
            title: `❓・Panel de ayuda`,
            desc: `¡Bienvenido al panel de ayuda de Bot! ¡Hemos hecho un pequeño resumen para ayudarte! Elige en el menú de abajo`,
            image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
            fields: [
                {
                    name: `❌┆El menú no funciona?`,
                    value: `Intenta reenviar el comando. Si no obtienes ninguna reacción, asegúrate de informar del bug!`
                },
                {
                    name: `🪲┆Encontraste un bug?`,
                    value: `Reportalo con \`/report bug\``
                },
                {
                    name: `🔗┆Links`,
                    value: `[Instagram](https://www.instagram.com/sseba.zz/) | [Invite](${client.config.discord.botInvite}) | [Twitch](https://www.twitch.tv/1sseba)`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 