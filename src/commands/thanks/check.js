const Discord = require('discord.js');
const thanksSchema = require("../../database/models/thanks");

module.exports = async (client, interaction, args) => {

    const member = interaction.options.getUser('user');

    thanksSchema.findOne({ User: member.id }, async (err, data) => {
        if (data) {

            return client.embed({ title: `🤝・Gracias`, desc: `**${member.tag}** tiene \`${data.Received}\` Gracias`, type: 'editreply' }, interaction);

        }
        else {

            return client.embed({ title: `🤝・Gracias`, desc: `**${member.tag}** tiene \`0\` Gracias`, type: 'editreply' }, interaction);
        }
    });

}

 