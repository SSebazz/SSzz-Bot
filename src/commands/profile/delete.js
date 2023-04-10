const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {

        if (data) {
            Schema.findOneAndDelete({ Guild: interaction.guild.id, User: interaction.user.id }).then(() => {
                client.succNormal({
                    text: "Tu perfil ha sido eliminado!",
                    type: 'editreply'
                }, interaction);
            })
        }
        else {
            client.errNormal({
                error: 'No se ha encontrado ningún perfil!',
                type: 'editreply'
            }, interaction)
        }
    })
}

 