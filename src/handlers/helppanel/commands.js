const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `📺┆Actividades`,
            value: `\`/activities\``,
            inline: true
        },
        {
            name: `🚫┆AFK`,
            value: `\`/afk help\``,
            inline: true
        },
        {
            name: `📣┆Anuncios`,
            value: `\`/announcement help\``,
            inline: true
        },
        {
            name: `👮‍♂️┆Auto mod`,
            value: `\`/automod help\``,
            inline: true
        },
        {
            name: `⚙️┆Auto setup`,
            value: `\`/autosetup help\``,
            inline: true
        },
        {
            name: `🎂┆Cumpleaños`,
            value: `\`/birthdays help\``,
            inline: true
        },
        {
            name: `🤖┆Bot`,
            value: `\`/bot help\``,
            inline: true
        },
        {
            name: `🎰┆Casino`,
            value: `\`/casino help\``,
            inline: true
        },
        {
            name: `⚙┆Configuracion`,
            value: `\`/config help\``,
            inline: true
        },
        {
            name: `💻┆Custom Commands`,
            value: `\`/custom-commands help\``,
            inline: true
        },
        {
            name: `💳┆Dcredits`,
            value: `\`/dcredits help\``,
            inline: true
        },
        {
            name: `💰┆Economia`,
            value: `\`/economy help\``,
            inline: true
        },
        {
            name: `👪┆Familia`,
            value: `\`/family help\``,
            inline: true
        },
        {
            name: `😂┆Diversion`,
            value: `\`/fun help\``,
            inline: true
        },
        {
            name: `🎮┆Juegos`,
            value: `\`/games help\``,
            inline: true
        },
        {
            name: `🥳┆Sorteos`,
            value: `\`/giveaway help\``,
            inline: true
        },
        {
            name: `⚙️┆Ajustes del Crew`,
            value: `\`/guild help\``,
            inline: true
        },
        {
            name: `🖼┆Imagenes`,
            value: `\`/images help\``,
            inline: true
        },
        {
            name: `📨┆Invitaciones`,
            value: `\`/invites help\``,
            inline: true
        },
        {
            name: `🆙┆Salida`,
            value: `\`/levels help\``,
            inline: true
        },
        {
            name: `💬┆Mensages`,
            value: `\`/messages help\``,
            inline: true
        },
        {
            name: `👔┆Moderacion`,
            value: `\`/moderation help\``,
            inline: true
        },
        {
            name: `🎶┆Musica`,
            value: `\`/music help\``,
            inline: true
        },
        {
            name: `📓┆Notepad`,
            value: `\`/notepad help\``,
            inline: true
        },
        {
            name: `👤┆Perfil`,
            value: `\`/profile help\``,
            inline: true
        },
        {
            name: `📻┆Radio`,
            value: `\`/radio help\``,
            inline: true
        },
        {
            name: `😛┆Roles de Reaccion`,
            value: `\`/reactionroles help\``,
            inline: true
        },
        {
            name: `🔍┆Busqueda`,
            value: `\`/search help\``,
            inline: true
        },
        {
            name: `📊┆Server Stats`,
            value: `\`/serverstats help\``,
            inline: true
        },
        {
            name: `⚙️┆setup`,
            value: `\`/setup help\``,
            inline: true
        },
        {
            name: `🎛┆Soundboard`,
            value: `\`/soundboard help\``,
            inline: true
        },
        {
            name: `🗨️┆Sticky messages`,
            value: `\`/stickymessages help\``,
            inline: true
        },
        {
            name: `💡┆Sugerencias`,
            value: `\`/sugestions help\``,
            inline: true
        },
        {
            name: `🤝┆Gracias`,
            value: `\`/thanks help\``,
            inline: true
        },
        {
            name: `🎫┆Tickets`,
            value: `\`/tickets help\``,
            inline: true
        },
        {
            name: `⚒️┆Herramientas`,
            value: `\`/tools help\``,
            inline: true
        },
        {
            name: `🔊┆Voz`,
            value: `\`/voice help\``,
            inline: true
        },
    ];

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel("Invite")
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel("Servidor de asistencia")
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nada seleccionado')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "💻",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Bot to your server`,
                                    emoji: "📨",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `Servidor de asistencia`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "📃",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `❓・Panel de ayuda`,
                    desc: `Ver todas las categorías de comandos del bot aquí! \n\n[Instagram](https://www.instagram.com/sseba.zz/) | [Invite](${client.config.discord.botInvite}) | [Twitch](https://www.twitch.tv/1sseba)`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `❓・Panel de ayuda`,
                                    desc: `Ver todas las categorías de comandos del bot aquí! \n\n[Instagram](https://www.instagram.com/sseba.zz/) | [Invite](${client.config.discord.botInvite}) | [Twitch](https://www.twitch.tv/1sseba)`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `❓・Panel de ayuda`,
                                    desc: `Ver todas las categorías de comandos del bot aquí! \n\n[Instagram](https://www.instagram.com/sseba.zz/) | [Invite](${client.config.discord.botInvite}) | [Twitch](https://www.twitch.tv/1sseba)`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 