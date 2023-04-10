const Discord = require('discord.js');
const Canvacord = require("canvacord");

const Functions = require("../../database/models/functions");
const Schema = require("../../database/models/levels");

module.exports = async (client, interaction, args) => {
    const data = await Functions.findOne({ Guild: interaction.guild.id });

    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;
    
    if (data && data.Levels == true) {
        const target = interaction.options.getUser('user');
        const xp = interaction.options.getNumber('amount');

        const user = await client.setXP(target.id, interaction.guild.id, xp);

        client.succNormal({ 
            text: `XP ha sido modificado con éxito`,
            fields: [
                {
                    name: "🆕┆Nuevo XP",
                    value: `${user.xp}`,
                    inline: true,
                },
                {
                    name: "👤┆Usuario",
                    value: `${target} (${target.tag})`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction);
    }
    else {
        client.errNormal({
            error: "Los niveles están desactivados en este guild!",
            type: 'editreply'
        }, interaction);
    }
}

 