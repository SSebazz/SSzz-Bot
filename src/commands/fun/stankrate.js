
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `💨・Tasa de hedor`,
        desc: `Usted es ${result}% apestoso!`,
        type: 'editreply'
    }, interaction)
}

 