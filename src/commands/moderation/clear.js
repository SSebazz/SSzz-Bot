const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction);

    if (perms == false) return;

    const amount = interaction.options.getNumber('amount');

    if (amount > 100) return client.errNormal({
        error: "No puedo borrar más de 100 mensajes a la vez!",
        type: 'editreply'
    }, interaction);

    if (amount < 1) return client.errNormal({
        error: "No puedo borrar menos de 1 mensaje!",
        type: 'editreply'
    }, interaction);

    interaction.channel.bulkDelete(amount + 1).then(() => {
        client.succNormal({
            text: `He borrado correctamente los mensajes`,
            fields: [
                {
                    name: "💬┆Cantidad",
                    value: `${amount}`,
                    inline: true
                }
            ],
            type: 'ephemeraledit'
        }, interaction)
    }).catch(err => {
        client.errNormal({
            error: "Se ha producido un error al intentar borrar mensajes en este canal!",
            type: 'editreply'
        }, interaction);
    });
}

 