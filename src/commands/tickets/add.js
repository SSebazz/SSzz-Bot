const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");

module.exports = async (client, interaction, args) => {
    const data = await ticketSchema.findOne({ Guild: interaction.guild.id });

    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    if (data) {
        const ticketCategory = interaction.guild.channels.cache.get(data.Category);
        if (ticketCategory == undefined) {
            return client.errNormal({
                error: "Configurar el ticket!",
                type: 'editreply'
            }, interaction)
        }

        if (interaction.channel.parentId == ticketCategory.id) {
            let user = interaction.options.getUser('user');
            interaction.channel.permissionOverwrites.edit(user.id, { ViewChannel: true, SendMessages: true });

            return client.simpleEmbed({
                desc: `Añadido ${user}`,
                type: 'editreply'
            }, interaction)
        }
        else {
            client.errNormal({
                error: "Esto no es un ticket!",
                type: 'editreply'
            }, interaction)
        }
    }
}

 