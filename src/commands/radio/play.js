const Discord = require('discord.js');
const Schema = require("../../database/models/music");

module.exports = async (client, interaction, args) => {
    const webhookClientLogs = new Discord.WebhookClient({
        id: client.webhooks.voiceLogs.id,
        token: client.webhooks.voiceLogs.token,
    });

    let channel = interaction.member.voice ? interaction.member.voice.channel : null;
    if (!channel) return client.errNormal({ text: `El canal no existe!`, type: 'editreply' }, interaction);

    client.radioStart(channel);

    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            data.Channel = channel.id;
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Channel: channel.id,
            }).save();
        }
    })

    client.embed({
        title: `📻・Empezó la radio`,
        desc: `La radio ha arrancado con éxito \nPara que el bot se vaya haz: \`rleave\``,
        fields: [{
            name: "👤┆Iniciado por",
            value: `${interaction.user} (${interaction.user.tag})`,
            inline: true
        },
        {
            name: "📺┆Canal",
            value: `${channel} (${channel.name})`,
            inline: true
        },
        {
            name: "🎶┆Emisora de radio",
            value: `[Radio 538](https://www.538.nl/)`,
            inline: true
        },
        ],
        type: 'editreply'
    }, interaction)

    let embed = new Discord.EmbedBuilder()
        .setTitle(`📻・Empezó la radio`)
        .setDescription(`_______________ \n\nLa radio ha arrancado con éxito`)
        .addFields(
            { name: "👤┆Iniciado por", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
            { name: "📺┆Canal", value: `${channel} (${channel.name})`, inline: true },
            { name: "⚙️┆Guild", value: `${interaction.guild.name} (${interaction.guild.id})`, inline: true },
        )
        .setColor(client.config.colors.normal)
        .setTimestamp();
    webhookClientLogs.send({
        username: '@SSzzBot-Logs',
        embeds: [embed],
    });
}

 