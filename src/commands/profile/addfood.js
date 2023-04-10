const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    const food = interaction.options.getString('food');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {

            if (data && data.Food) {
                if (data.Food.includes(food)) {
                    return client.errNormal({ error: `Ese alimento ya existe en su base de datos!`, type: 'editreply' }, interaction);
                }
                data.Food.push(food);
                data.save();
            }
            else {
                data.Food = food;
                data.save();
            }
            client.succNormal({
                text: "Añade tu comida",
                fields: [{
                    name: "🥐┆Comida",
                    value: `\`\`\`${food}\`\`\``,
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

 