const Schema = require('../../database/models/profile');
const isHexcolor = require('is-hexcolor');

module.exports = async (client, interaction, args) => {

    const color = interaction.options.getString('color');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            if (!isHexcolor(color)) return client.errNormal({ error: "No ha especificado un color hex. Ejemplo: #ff0000", type: 'editreply' }, interaction);

            data.Color = color;
            data.save();

            client.succNormal({
                text: "Su color favorito está fijado",
                fields: [{
                    name: "🎨┆Color",
                    value: `\`\`\`${color}\`\`\``,
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

 