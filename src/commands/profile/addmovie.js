const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const movie = interaction.options.getString('movie');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Movies) {
                if (data.Movies.includes(movie)) {
                    return client.errNormal({ error: `Esa película ya existe en su base de datos!`, type: 'editreply' }, interaction);
                }
                data.Movies.push(movie);
                data.save();
            }
            else {
                data.Movies = movie;
                data.save();
            }
            client.succNormal({
                text: "Añadida su película",
                fields: [{
                    name: "🎬┆Películas",
                    value: `\`\`\`${movie}\`\`\``,
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

 