const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction);

    if (perms == false) return;

    const member = interaction.options.getUser('user');

    interaction.guild.channels.cache.forEach(async (channel) => {
        if (channel.messages) {
            let messages = await channel.messages.fetch();
            let userMessages = messages.filter((m) => m.author.id === member.id);
            await channel.bulkDelete(userMessages).then(() => {
                client.succNormal({
                    text: `He borrado correctamente los mensajes`,
                    fields: [
                        {
                            name: "👤┆Usuario",
                            value: `${member} (${member.tag})`,
                            inline: true
                        }
                    ],
                    type: 'editreply'
                }, interaction).then(msg => setTimeout(() => {
                    msg.delete()
                }, 5000));
            }).catch(err => { });
        }
    });

    interaction.channel.bulkDelete(amount + 1).then(() => {
        client.succNormal({
            text: `He borrado correctamente los mensajes`,
            fields: [
                {
                    name: "💬┆Cantidad",
                    value: amount,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction).then(msg => setTimeout(() => {
            msg.delete()
        }, 5000));
    }).catch(err => {
        client.errNormal({
            error: "Se ha producido un error al intentar eliminar mensajes en este canal!",
            type: 'editreply'
        }, interaction);
    });
}

 