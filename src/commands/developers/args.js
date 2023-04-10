const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');

    client.succNormal({
        text: `Message has been sent successfully!`,
        type: 'ephemeraledit'
    }, interaction);

    if (message == "information") {
        client.simpleEmbed({
        }, interaction.channel).then(() => {
            client.embed({
                title: `ℹ️・Informacion`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: ``,
                fields: [
                    {
                        name: `👋┆Bienvenido a ${interaction.guild.name}!`,
                        value: `¡Bienvenido a nuestro lugar de reunión! ¡Conoce gente nueva aquí, juega a algunos juegos y participa en eventos de temporada! ¡Somos un servidor donde reunimos a todo el mundo e intentamos que sea cómodo para todos! ¡Sé bienvenido y diviértete!`,
                    },
                    {
                        name: `❓┆Qué puedo hacer aquí??`,
                        value: `- ¡Conoce a gente nueva! \n- ¡Juega a muchos juegos divertidos! \n- ¡Descubre las estaciones! \n- ¡Participa en eventos! \nY.... Por último, pero no menos importante, ¡elige tus propios roles en <#996583132482510958>!`,
                    },
                    {
                        name: `🎫┆Cómo obtener ayuda en caso necesario?`,
                        value: `Puede hacer un ticket en <#1093959750548471952>! Estaremos encantados de ayudarle con sus preguntas aquí y ofrecerle apoyo en su servidor!`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "rules") {
        client.simpleEmbed({
            // image: `https://media.discordapp.net/attachments/937337957419999272/937338297968123904/techpoint_channel_banner_rules.jpg?width=812&height=221`
        }, interaction.channel).then(async () => {
            await client.embed({
                title: `📃・Reglas`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\nEstas son las reglas de nuestro servidor. Por favor, cíñete a ellas para que sea divertido para todos. Los Admins y Mods darán Timeout/Kick/Ban a discreción.`,
            }, interaction.channel)

            await client.embed({
                title: `1. Ser respetuoso`,
                desc: `Debes respetar a todos los usuarios, independientemente de tu simpatía hacia ellos. Trata a los demás como quieres que te traten a ti.`,
            }, interaction.channel)

            await client.embed({
                title: `2. No al lenguaje inapropiado`,
                desc: `El uso de palabras malsonantes debe reducirse al mínimo. No obstante, se prohíbe todo lenguaje despectivo hacia cualquier usuario..`,
            }, interaction.channel)

            await client.embed({
                title: `3. No al spam`,
                desc: `No envíes muchos mensajes pequeños uno detrás de otro. No interrumpas el chat enviando spam.`,
            }, interaction.channel)

            await client.embed({
                title: `4. Nada de material pornográfico, para adultos o NSFW.`,
                desc: `Este es un servidor comunitario y no está pensado para compartir este tipo de material.`,
            }, interaction.channel)

            await client.embed({
                title: `5. Sin publicidad`,
                desc: `No toleramos ningún tipo de publicidad, ya sea de otras comunidades o de streams. Puedes publicar tus contenidos en el canal multimedia si son relevantes y aportan valor real (Vídeo/Arte).`,
            }, interaction.channel)

            await client.embed({
                title: `6. Sin nombres ni fotos de perfil ofensivos`,
                desc: `Se le pedirá que cambie su nombre o foto si el personal los considera inapropiados.`,
            }, interaction.channel)

            await client.embed({
                title: `7. Asalto a servidores`,
                desc: `No están permitidas las incursiones ni las menciones a las mismas.`,
            }, interaction.channel)

            await client.embed({
                title: `8. Amenazas directas e indirectas`,
                desc: `Las amenazas a otros usuarios de DDoS, Muerte, DoX, abuso y otras amenazas maliciosas están absolutamente prohibidas y desautorizadas.`,
            }, interaction.channel)

            await client.embed({
                title: `9. Siga las directrices de la comunidad de Discord`,
                desc: `Puede encontrarlos aquí: https://discordapp.com/guidelines`,
            }, interaction.channel)

            await client.embed({
                title: `10. No se una a los canales de chat de voz sin el permiso de las personas que ya están allí.`,
                desc: `Si ves que tienen un sitio libre, puedes unirte y preguntar si tienen un sitio libre, pero vete si tu presencia no es deseada por quien estaba allí primero.`,
            }, interaction.channel)
        })
    }

    if (message == "applications") {
        client.simpleEmbed({
            // image: `https://cdn.discordapp.com/attachments/843487478881976381/874742737415581786/Bot_banner_applications.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `💼・Aplicaciones`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\n¿Qué puede ser más divertido que trabajar en el mejor bot/servidor? Regularmente tenemos plazas para nuevos puestos que puedes solicitar \n\nPero... ¿qué puedes esperar?`,
                fields: [
                    {
                        name: `👥┆Un equipo muy agradable`,
                        value: `En el equipo de Bot siempre hay un ambiente agradable y se trata a todos por igual!`,
                    },
                    {
                        name: `🥳┆Acceso al programa beta`,
                        value: `¡Accede a funciones inéditas de Bot con tu propio servidor! Eres un auténtico probador de Bot!`,
                    },
                    {
                        name: `📛┆Un bonito rango e insignia`,
                        value: `Obtendrás un bonito rango en el servidor y una insignia de equipo en nuestro comando userinfo. Todo el mundo podrá ver que contribuyes al equipo`,
                    },
                    {
                        name: `📖┆Aprender y crecer`,
                        value: `Entendemos que no siempre se entiende todo a la primera. En Bot, te damos la oportunidad de aprender cosas nuevas y mejorar en tu puesto. También puedes formar parte del equipo directivo en el futuro.!`,
                    },
                    {
                        name: `📘┆Qué significa todo esto?`,
                        value: `**Moderador** \n¡Mantente ocupado con el servidor para que todo sea y siga siendo divertido para todos! Chatea con nosotros y mantener la visión de conjunto \n\n**Marketing** \nWe also want to grow and we do that with a great marketing team! You know better than anyone how to make a server grow well \n\n**Organización** \nGarantizarás un ambiente aún más agradable en el servidor. Junto con un equipo, trabajarás en nuevos y divertidos eventos para que el servidor sea aún más divertido.`,
                    },
                    {
                        name: `📃┆Aplicar?`,
                        value: `Cree un ticket para recibir su solicitud!`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "boosterperks") {
        client.simpleEmbed({
            // image: `https://media.discordapp.net/attachments/843487478881976381/881396544195149874/Bot_banner_boosters.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `💎・Ventajas de Booster`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\n¿Más opciones en el servidor? Conviértete en un auténtico Booster y consigue bonitos beneficios para disfrutar de una agradable experiencia. Pero, ¿qué obtienes realmente?`,
                fields: [
                    {
                        name: `😛┆Utilizar stickers externos`,
                        value: `Utilizar stickers de otros servidores en nuestro servidor`,
                    },
                    {
                        name: `🔊┆Enviar mensajes TTS`,
                        value: `Enviar mensajes con sonido`,
                    },
                    {
                        name: `🤔┆Acceso al salón oculto`,
                        value: `Accede a una sala privada y chatea con mas gente!`,
                    },
                    {
                        name: `📛┆Cambia tu apodo`,
                        value: `Cambia tu nombre en el servidor. Así destacarás en el servidor`,
                    },
                    {
                        name: `💭┆Crear hilos públicos/privados`,
                        value: `Crear un hilo en nuestros canales de texto`,
                    },
                    {
                        name: `🎉┆Regalos privados`,
                        value: `Acceda a divertidos sorteos exclusivos`,
                    },
                    {
                        name: `📂┆Enviar archivos en cualquier canal`,
                        value: `Envíe archivos en todos los canales en los que pueda hablar`,
                    },
                    {
                        name: `😜┆Rol personalizado de su elección`,
                        value: `Crea tu propio rol que puedes establecer tú mismo`,
                    },
                    {
                        name: `💎┆Consigue booster rol + insignia`,
                        value: `Destaca con un bonito rol de booster y una insignia de booster!`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "links") {
        client.simpleEmbed({
            // image: `https://media.discordapp.net/attachments/843487478881976381/881396544195149874/Bot_banner_boosters.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `🔗・Enlaces`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\nVer todos los enlaces de Bot Network!`,
                fields: [
                    {
                        name: `▬▬│Servers│▬▬`,
                        value: `links`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "rewards") {
        client.embed({
            title: `😜・Recompensas de roles`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `\n\n¿Quieres algunos extras en el servidor? ¿O quieres destacar más en el servidor? Más abajo encontrarás las recompensas`,
            fields: [
                {
                    name: `🏆┆Niveles`,
                    value: `- Nivel 5   | <@&833307296699908097>\n- Nivel 10  | <@&833307450437664838>\n- Nivel 15  | <@&833307452279226379>\n- Nivel 30 | <@&915290300757458964>\n- Nivel 40 | <@&915290324480430080>`,
                },
                {
                    name: `🥳┆Especial`,
                    value: `- 1 server vote | <@&833959913742794772>\n- 1 boost | <@&744208324022501447>\n- 1 donacion | <@&849554599371210793>`,
                },
                {
                    name: `💰┆Economía`,
                    value: `- $10.000 | <@&890720270086733854>\n- $15.000 | <@&833936202725720084>\n- $20.000 | <@&833936185167839232> \n- $25.000 | <@&928236333309255711> \n- $30.000 | <@&928235747100733450>`,
                }
            ]
        }, interaction.channel)
    }

    if (message == "ourbots") {
        client.simpleEmbed({
            // image: `https://cdn.discordapp.com/attachments/843487478881976381/874742741224022016/Bot_banner_bot_info.jpg`
        }, interaction.channel).then(() => {
            client.embed({
                title: `🤖・Nuestros bots`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `\n\nFuera de la comunidad también mantenemos 2 bots públicos. Estos bots están hechos para mejorar tu servidor!`,
                fields: [
                    {
                        name: `📘┆Qué es el Bot?`,
                        value: `¡Bot es un bot con el que puedes manejar todo tu servidor! Con no menos de 400+ comandos, ¡tenemos un gran bot con muchas opciones para mejorar tu servidor! ¿Sabes qué más es hermoso? Todo esto es **GRATIS** de usar!`,
                    },
                    {
                        name: `🎶┆Qué es Bot 2?`,
                        value: `Bot 2 se creó para la música adicional. De este modo, nunca se estorba cuando alguien ya está escuchando música. Además, este bot contiene una caja de resonancia y un sistema de radio`,
                    },
                    {
                        name: `📨┆Cómo invito a los robots?`,
                        value: `Puedes invitar a los bots haciendo \`/invite\` o haciendo clic en los enlaces de abajo \n\n**Bot** - [Invita aquí](${client.config.discord.botInvite})`,
                    },
                    {
                        name: `🎫┆Cómo obtener ayuda en caso necesario?`,
                        value: `¡Puedes hacer un ticket en <#996232440311988269>! Estamos encantados de ayudarle con sus preguntas aquí y ofrecer apoyo en su servidor!`,
                    }
                ]
            }, interaction.channel)
        })
    }
}

 