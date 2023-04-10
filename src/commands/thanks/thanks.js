const Discord = require('discord.js');

const thanksSchema = require("../../database/models/thanks");
const thanksAuthor = require("../../database/models/thanksAuthor");

module.exports = async (client, interaction, args) => {

    const target = interaction.options.getUser('user');
    if (!target) return client.errUsage({ usage: "gracias [mention user]", type: 'editreply' }, interaction);

    if (target.id === interaction.user.id) return client.errNormal({ error: `No puedes darte las gracias!`, type: 'editreply' }, interaction);

    thanksAuthor.findOne({ User: target.id, Author: interaction.user.id }, async (err, data) => {
        if (data) {
            client.errNormal({ error: `Ya has dado las gracias a este usuario!`, type: 'editreply' }, interaction);
        }
        else {
            thanksSchema.findOne({ User: target.id }, async (err, data) => {
                if (data) {
                    data.Received += 1;
                    data.save();
                    client.succNormal({ text: `Ha dado las gracias a <@${target.id}>! Ahora tienen \`${data.Received}\` gracias`, type: 'editreply' }, interaction);
                }
                else {
                    new thanksSchema({
                        User: target.id,
                        UserTag: target.tag,
                        Received: 1,
                    }).save();
                    client.succNormal({ text: `Ha dado las gracias a <@${target.id}>! Ahora tienen \`1\` gracias`, type: 'editreply' }, interaction);
                }
            })

            new thanksAuthor({
                User: target.id,
                Author: interaction.user.id,
            }).save();
        }
    })
}

 