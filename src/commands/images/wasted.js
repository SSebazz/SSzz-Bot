module.exports = async (client, interaction, args) => {

    let link = `https://some-random-api.ml/canvas/wasted/?avatar=${interaction.user.avatarURL({ size: 1024, extension: 'png' })}`

    client.embed({
        title: `🖼・Imagen generada`,
        image: link,
        type: 'editreply'
    }, interaction)
}

 