
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `👀・Tasa Simp`,
        desc: `Usted es ${result}% simp!`,
        type: 'editreply'
    }, interaction)
}

 