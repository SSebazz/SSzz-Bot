const discord = require('discord.js');

/**
 * @param {discord.Client} client 
 * @param {discord.GuildMember} user 
 * @param {discord.User} mod 
 * @param {string} reason 
 * @returns
 */
module.exports = async (client, user, mod, reason) => {
    const logsChannel = await client.getLogs(user.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🔨・Miembro advertido`,
        desc: `Un usuario ha sido advertido`,
        fields: [
            {
                name: `> User`,
                value: `- ${user}`
            },
            {
                name: `> Tag`,
                value: `- ${user.user.username}#${user.user.discriminator}`
            },
            {
                name: `> ID`,
                value: `${user.id}`
            },
            {
                name: `> Moderator`,
                value: `${mod} (${mod.id})`
            },
            {
                name: `> Razón`,
                value: `${reason}`
            }
        ]
    }, logsChannel).catch(() => {
        console.log
     })
};