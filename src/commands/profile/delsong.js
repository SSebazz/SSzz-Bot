const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const song = interaction.options.getString('song');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Songs) {
                if (!data.Songs.includes(song)) {
                    return client.errNormal({ error: `Esa canción no existe en la base de datos!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Songs.filter((target) => target !== song);

                await Schema.findOneAndUpdate(user, {
                    Songs: filtered
                });
            }
            client.succNormal({
                text: "Eliminada tu canción",
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

 