const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {

    let amount = interaction.options.getNumber('amount');
    let user = interaction.user;

    if (!amount) return client.errUsage({ usage: "retirar [amount]", type: 'editreply' }, interaction);

    if (isNaN(amount)) return client.errNormal({ error: "Introduzca un número válido!", type: 'editreply' }, interaction);

    if (amount < 0) return client.errNormal({ error: `No puedes retirar dinero negativo!`, type: 'editreply' }, interaction);

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {
            if (data.Bank === 0) return client.errNormal({ error: `No te queda nada en el banco!`, type: 'editreply' }, interaction);

            let money = parseInt(amount);

            data.Money += money;
            data.Bank -= money;
            data.save();

            client.succNormal({
                text: `Has retirado dinero de tu banco!`,
                fields: [
                    {
                        name: `${client.emotes.economy.coins}┆Cantidad`,
                        value: `$${amount}`,
                        inline: true
                    }
                ],
                type: 'editreply'
            }, interaction);
        }
        else {
            client.errNormal({ text: `No tienes dinero para retirar!`, type: 'editreply' }, interaction);
        }
    })
}
 