const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const status = interaction.options.getString('text');

    if (status.length > 30) return client.errNormal({ error: "Su estado no puede tener más de 30 caracteres", type: 'editreply' }, interaction);

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Status = status;
            data.save();

            client.succNormal({
                text: "Su estatus está fijado",
                fields: [{
                    name: "😎┆Estado",
                    value: `\`\`\`${status}\`\`\``,
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

 