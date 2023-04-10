const Discord = require('discord.js');

const Schema = require("../../database/models/reactionRoles");

module.exports = async (client, interaction, args) => {
    const category = interaction.options.getString('category');
    const role = interaction.options.getRole('role');
    const emoji = interaction.options.getString('emoji');

    const parsedEmoji = Discord.parseEmoji(emoji);
    if (!parsedEmoji) return client.errNormal({
        error: `Non se han encontrado datos!`,
        type: 'editreply'
    }, interaction)

    Schema.findOne({ Guild: interaction.guild.id, Category: category }, async (err, data) => {
        if (data) {
            data.Roles[emoji] = [
                role.id,
                {
                    id: parsedEmoji.id,
                    raw: emoji
                }
            ]

            await Schema.findOneAndUpdate({ Guild: interaction.guild.id, Category: category }, data)
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Message: 0,
                Category: category,
                Roles: {
                    [emoji]: [
                        role.id,
                        {
                            id: parsedEmoji.id,
                            raw: emoji
                        }
                    ]
                }
            }).save();
        }

        client.succNormal({ 
            text: "Rol de reacción creado con éxito! Cree un panel de la siguiente manera",
            fields: [
                {
                    name: `📘┆Panel de menú`,
                    value: `\`/reactionroles menu [category name]\``,
                    inline: true
                },
                {
                    name: `📘┆Panel de botones`,
                    value: `\`/reactionroles button [category name]\``,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction);
    })
}

 