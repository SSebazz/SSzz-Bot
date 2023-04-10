const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1076961208248307843",
    token: "P74b-BAEtHPb9u_gk9Y10E_Wxr8idleiGqt_WXM-y2wsYg0k96-Nkv61ZU5LVL4doC0l",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・Nuevos comentarios!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Comentarios enviados correctamente a los desarrolladores`,
        type: 'editreply'
    }, interaction);
}

 