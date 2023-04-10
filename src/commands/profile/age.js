const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const age = interaction.options.getNumber('number');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            if (isNaN(age)) return client.errNormal({ error: "No se ha facilitado ningún número válido", type: 'editreply' }, interaction)

            data.Age = age;
            data.save();

            client.succNormal({
                text: "Su edad está fijada",
                fields: [{
                    name: "📆┆Edad",
                    value: `\`\`\`${age}\`\`\``,
                    inline: true,
                }],
                type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ error: "No se ha encontrado ningún perfil. Abra un perfil con createprofile", type:'editreply' }, interaction);
        }
    })
}

 