
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `🏳️‍🌈・Tasa gay`,
        desc: `Usted es ${result}% gay!`,
        type: 'editreply'
    }, interaction)
}

 