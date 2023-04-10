const Discord = require('discord.js');

const Schema = require("../../database/models/economy");

module.exports = async (client, interaction, args) => {

    let amount = interaction.options.getNumber('amount');
    let user = interaction.user;

    if (!amount) return client.errUsage({ usage: "depósito [amount]", type: 'editreply' }, interaction);

    if (isNaN(amount)) return client.errNormal({ error: "Introduzca un número válido!", type: 'editreply' }, interaction);

    if (amount < 0) return client.errNormal({ error: `No se puede depositar dinero negativo!`, type: 'editreply' }, interaction);

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {
            if (data.Money < parseInt(amount)) return client.errNormal({ error: `No tienes tanto dinero!`, type: 'editreply' }, interaction);

            let money = parseInt(amount);

            data.Money -= money;
            data.Bank += money;
            data.save();

            client.succNormal({
                text: `Has ingresado dinero en tu banco!`,
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
            client.errNormal({ text: `No tienes dinero para depositar!`, type: 'editreply' }, interaction);
        }
    })
}
 