const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const artist = interaction.options.getString('artist');
    const user = { User: interaction.user.id }

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Artists) {
                if (!data.Artists.includes(artist)) {
                    return client.errNormal({ error: `Ese artista no existe en la base de datos!`, type: 'editreply' }, interaction);
                }

                const filtered = data.Artists.filter((target) => target !== artist);

                await Schema.findOneAndUpdate(user, {
                    Artists: filtered
                });
            }
            client.succNormal({
                text: "Eliminado su artista",
                fields: [{
                    name: "🎤┆Artista",
                    value: `\`\`\`${artist}\`\`\``,
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

 