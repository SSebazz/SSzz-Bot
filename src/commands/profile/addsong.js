const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const song = interaction.options.getString('song');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Songs) {
                if (data.Songs.includes(song)) {
                    return client.errNormal({ error: `Esa canción ya existe en tu base de datos!`, type: 'editreply' }, interaction);
                }
                data.Songs.push(song);
                data.save();
            }
            else {
                data.Songs = song;
                data.save();
            }
            client.succNormal({
                text: "Añadida su canción",
                fields: [{
                    name: "🎶┆Canción",
                    value: `\`\`\`${song}\`\`\``,
                    inline: true,
                }],
                type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "No se ha encontrado ningún perfil. Abrir un perfil con createprofile", type:'editreply' }, interaction);
        }
    })

}

 