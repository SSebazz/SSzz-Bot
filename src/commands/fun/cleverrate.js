
module.exports = async (client, interaction, args) => {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `💡・Tasa inteligente`,
        desc: `Usted es ${result}% inteligente!`,
        type: 'editreply'
    }, interaction)
}

 