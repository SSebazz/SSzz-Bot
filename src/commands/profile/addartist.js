const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const artist = interaction.options.getString('artist');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Artists) {
                if (data.Artists.includes(artist)) {
                    return client.errNormal({ error: `Ese artista ya existe en su base de datos!`, type: 'editreply' }, interaction);
                }
                data.Artists.push(artist);
                data.save();
            }
            else {
                data.Artists = artist;
                data.save();
            }
            client.succNormal({
                text: "Añadido su artista",
                fields: [{
                    name: "🎤┆Artista",
                    value: `\`\`\`${artist}\`\`\``,
                    inline: true,
                }],
                type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "No se encuentra ningún perfil. Abrir un perfil con createprofile", type:'editreply' }, interaction);
        }
    })

}

 