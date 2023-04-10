
module.exports = async (client, interaction, args) => {

    const user1 = interaction.options.getUser('user1');
    const user2 = interaction.options.getUser('user2');

    if (!user1 || !user2) return client.errUsage({ usage: "lovemeter [user1]", type: 'editreply' }, interaction);

    if (user1 == user2) return client.errNormal({ error: "No se pueden dar 2 nombres iguales!", type: 'editreply' }, interaction);

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `${client.emotes.normal.heart}・Medidor de amor`,
        desc: "Vea cuánto coincide!",
        fields: [
            {
                name: "Nombre 1",
                value: `${user1}`,
                inline: true,
            },
            {
                name: "Nombre 2",
                value: `${user2}`,
                inline: true,
            },
            {
                name: "Resultado",
                value: `**${user2}** y **${user2}** match **${result}%**`,
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

     