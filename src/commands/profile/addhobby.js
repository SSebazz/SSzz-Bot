const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const hobby = interaction.options.getString('hobby');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Hobbys) {
                if (data.Hobbys.includes(hobby)) {
                    return client.errNormal({ error: `Esa afición ya existe en tu base de datos!`, type: 'editreply' }, interaction);
                }
                data.Hobbys.push(hobby);
                data.save();
            }
            else {
                data.Hobbys = hobby;
                data.save();
            }
            client.succNormal({
                text: "Añade tu afición",
                fields: [{
                    name: "⚽┆Afición",
                    value: `\`\`\`${hobby}\`\`\``,
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

 