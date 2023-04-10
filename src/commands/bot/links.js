const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Nada seleccionado')
                .addOptions([
                    {
                        label: `Servidor de asistencia`,
                        description: `Unirse al servidor de apoyo`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Bot`,
                        description: `Invita al Bot a tu servidor`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Servidor comunitario`,
                        description: `Júnete al servidor comunitario!`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                    {
                        label: `Top.gg`,
                        description: `Mostrar el enlace top.gg`,
                        emoji: "📃",
                        value: "top.gg-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Links`,
        desc: ` Accede a todos los enlaces de Bot Elija el enlace que necesita en el menú de abajo`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 