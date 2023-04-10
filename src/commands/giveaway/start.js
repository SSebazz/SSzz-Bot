const Discord = require('discord.js');
const ms = require('ms');

module.exports = async (client, interaction, args) => {
    const gchannel = interaction.options.getChannel('channel');
    const duration = interaction.options.getString('duration');
    const winnerCount = interaction.options.getNumber('winners');
    const prize = interaction.options.getString('prize');

    client.giveawaysManager.start(gchannel, {
        duration: ms(duration),
        prize: `${client.emotes.normal.gift} - ${prize}`,
        lastChance: {
            enabled: true,
            content: `${client.emotes.normal.error} **ÚLTIMA OPORTUNIDAD PARA PARTICIPAR !** ${client.emotes.normal.error}`,
            threshold: 5000,
            embedColor: '#FF0000'
        },
        pauseOptions: {
            isPaused: false,
            content: '⚠️ **ESTE SORTEO ESTÁ EN PAUSA !** ⚠️',
            unPauseAfter: null,
            embedColor: '#FFFF00'
        },
        winnerCount: parseInt(winnerCount),
        hostedBy: interaction.user,
        thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
        messages: {
            giveaway: `${client.emotes.normal.party} **SORTEO** ${client.emotes.normal.party}`,
            giveawayEnded: `${client.emotes.normal.party} **SORTEO FIN** ${client.emotes.normal.party}`,
            drawing: `${client.emotes.normal.clock} - Termina en: **{timestamp}**!`,
            inviteToParticipate: "Reacciona con 🥳 para participar en el sorteo! \n",
            winMessage: "¡Enhorabuena {winners}! Acaba de ganar el **{this.prize}** !",
            embedFooter: "Sorteo!",
            embedColor: client.config.colors.normal,
            noWinner: "Sorteo cancelado, no hay suficientes participantes. \n",
            hostedBy: `${client.emotes.normal.party} - Organizado por: {this.hostedBy}`,
            winners: `🏆 - Ganador(es)`,
            endedAt: "Termina en:",
            units: {
                seconds: "segundos",
                minutes: "minutos",
                hours: "horas",
                days: "días",
                pluralS: false
            },
        },

    }).then((gData) => {
        client.succNormal({ 
            text: `El sorteo comenzó en ${gchannel}`,
            type: 'ephemeraledit'
        }, interaction);
    });
}

 