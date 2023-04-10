const fetch = require("node-fetch");
const generator = require('generate-password');

module.exports = async (client, interaction, args) => {

    const password = generator.generate({
        length: 10,
        symbols: true,
        numbers: true
    });

    const user = interaction.options.getUser('user');

    if (!user) return client.errUsage({ usage: "hack [mention user]", type: 'editreply' }, interaction)

    function wait(ms) {
        let start = new Date().getTime();
        let end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }

    client.embed({
        title: '💻・Hacking',
        desc: `El pirateo de ${user} iniciado...`,
        type: 'editreply'
    }, interaction).then(msg => {

        wait(140);
        client.embed({
            title: '💻・Hacking',
            desc: `Búsqueda de información sobre el usuario..`,
            type: 'edit',
        }, msg).then(i => {

            wait(133);
            client.embed({
                title: '💻・Hacking',
                desc: `Búsqueda de la dirección IP...`,
                type: 'edit',
            }, msg).then(i => {

                wait(140);
                client.embed({
                    title: '💻・Hacking',
                    desc: `Se ha encontrado la dirección IP del usuario!`,
                    fields: [
                        {
                            name: '🔗┆IP Adress',
                            value: `\`\`\`127.0.0.1\`\`\``,
                            inline: true,
                        }
                    ],
                    type: 'edit',
                }, msg).then(i => {

                    wait(60);
                    client.embed({
                        title: '💻・Hacking',
                        desc: `Búsqueda de inicio de sesión de Discord...`,
                        type: 'edit',
                    }, msg).then(i => {

                        wait(230);
                        client.embed({
                            title: '💻・Hacking',
                            desc: `El usuario discord login fue encontrado!`,
                            fields: [
                                {
                                    name: '📨┆Correo',
                                    value: `\`\`\`${user.username}onDiscord@gmail.com\`\`\``
                                },
                                {
                                    name: '🔑┆Contraseña',
                                    value: `\`\`\`${password}\`\`\``
                                }
                            ],
                            type: 'edit',
                        }, msg).then(i => {

                            wait(200);
                            client.embed({
                                title: '💻・Hacking',
                                desc: `Search for Discord token...`,
                                type: 'edit'
                            }, msg).then(i => {

                                wait(200);
                                fetch(`https://some-random-api.ml/bottoken?${user.id}`).then((res) => res.json()).catch({}).then(async (json) => {
                                    client.embed({
                                        title: '💻・Hacking',
                                        desc: `Se ha encontrado el token de la cuenta de discordia del usuario!`,
                                        fields: [
                                            {
                                                name: '🔧┆Token',
                                                value: `\`\`\`${json.token}\`\`\``,
                                                inline: true
                                            }
                                        ],
                                        type: 'edit',
                                    }, msg).then(i => {

                                        wait(140);
                                        client.embed({
                                            title: '💻・Hacking',
                                            desc: `Reportar cuenta a Discord por incumplir TOS...`,
                                            type: 'edit',
                                        }, msg).then(i => {

                                            wait(180);
                                            client.succNormal({ text: `${user} es hackeado con éxito. Toda la información del usuario fue enviada a su dm`, type: 'edit' }, msg);
                                            client.embed({
                                                title: '😂・Pranked',
                                                image: "https://media1.tenor.com/images/05006ed09075a0d6965383797c3cea00/tenor.gif?itemid=17987788",
                                            }, interaction.user)
                                        })
                                    })
                                }).catch({})
                            })
                        })
                    })
                })
            })
        })
    })

}

 