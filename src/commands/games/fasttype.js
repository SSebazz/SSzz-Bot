const Discord = require('discord.js');
const ms = require('ms');

let timeLength = 50000;
module.exports = async (client, interaction, args) => {

    let list = `Como estábamos perdidos, tuvimos que volver por donde habíamos venido.
    Está en una banda de chicos, lo que no tiene mucho sentido para una serpiente.
    Un pato muerto no vuela hacia atrás.
    No mees en mi jardín y me digas que intentas ayudar a mis plantas a crecer.
    Su grito silenció a los adolescentes alborotadores.
    Era difícil distinguir a los miembros del equipo porque todos llevaban el pelo recogido en una coleta.
    He oído que Nancy es muy guapa.
    Las colonias nudistas huyen de la alta costura.
    Una canción puede hacer o arruinar el día de una persona si se deja llevar por ella.
    No veía ninguna ironía en pedirme que cambiara pero quería que la aceptara tal como es.
    El pasatiempo favorito de mi tío era construir coches con fideos.
    Al final, se dio cuenta de que podía ver sonidos y oír palabras.
    Por favor, busca una receta de sopa de pollo en internet.
    Gary no tardó en darse cuenta de que los ladrones eran aficionados.
    ¿Cómo te has hecho daño?
    Era obvio que estaba acalorada, sudorosa y cansada.
    Parecía estar confusamente perplejo.
    El amor no es como la pizza.
    Siempre era peligroso conducir con él, ya que insistía en que los conos de seguridad eran un circuito de slalom.
    Mientras esperaba a que se calentara la ducha, se dio cuenta de que oía cómo el agua cambiaba de temperatura.
    Saludos desde la galaxia MACS0647-JD, o lo que llamamos hogar.
    El mundo ha cambiado mucho en los últimos diez años.
    Al entrar en la iglesia pudo oír la suave voz de alguien que susurraba a un teléfono móvil.
    Ahora tengo que reflexionar sobre mi existencia y preguntarme si de verdad soy real
    El tiempo de ayer era bueno para escalar.
    Los gofres siempre son mejores sin hormigas rojas ni pulgas.
    Nancy estaba orgullosa de haber dirigido un naufragio ajustado.
    Estaba tan preocupado por si podía o no que no se paró a pensar si debía.
    Si comer tortillas de tres huevos provoca aumento de peso, los huevos de periquito son un buen sustituto.
    No respeto a nadie que no sepa distinguir entre Pepsi y Coca-Cola.
    Encontró el final del arco iris y se sorprendió de lo que encontró allí.
    Se preguntó por qué a los 18 años tenía edad para ir a la guerra, pero no para comprar cigarrillos.
    Vivía en Monkey Jungle Road y eso parecía explicar toda su extrañeza.
    Julie quiere un marido perfecto.
    ¿Puedo ofrecerte algo de beber?
    Por favor, espere fuera de la casa.
    Su hijo bromeó diciendo que las barritas energéticas no eran más que caramelos para adultos.
    Mi hermana mayor se parece a mi madre.
    El espeso follaje y las enredaderas entrelazadas hacían casi imposible la caminata.
    Una gema brillante no es suficiente.
    Treinta años después, seguía pensando que estaba bien poner el rollo de papel higiénico debajo en vez de encima.
    Cada persona que te conoce tiene una percepción diferente de quién eres.
    Baja las escaleras con cuidado.
    Enfrentándose a su mayor miedo, se comió su primer malvavisco.
    Lloró diamantes.
    Mañana traerá algo nuevo, así que deja el día de hoy como un recuerdo.
    Erin creó accidentalmente un nuevo universo.
    David prefiere la estrategia de "meter la tienda en la bolsa" a la de doblarla bien.
    A la camarera no le hizo ninguna gracia cuando pidió huevos verdes con jamón.
    Sólo tienes que coger el bolígrafo y empezar.`;

    async function start() {
        const inGame = new Set();
        const filter = m => m.author.id === interaction.user.id;
        if (inGame.has(interaction.user.id)) return;
        inGame.add(interaction.user.id);
        var i;
        for (i = 0; i < 25; i++) {
            const time = Date.now();

            list = list.split("\n");
            let sentenceList = list[Math.floor(Math.random() * list.length)];

            let sentence = '';
            let ogSentence = sentenceList.toLowerCase().replace("    ", "");

            ogSentence.split(' ').forEach(argument => {
                sentence += '`' + argument.split('').join(' ') + '` '
            });

            await client.embed({
                title: `💬・FastType`,
                desc: `Escriba lo siguiente en ${ms(timeLength, { long: true })}! \n${sentence}`,
                type: 'editreply'
            }, interaction)

            try {
                var msg = await interaction.channel.awaitMessages({
                    filter,
                    max: 1,
                    time: timeLength,
                    errors: ['time']
                });
            } catch (ex) {
                client.errNormal({
                    error: "Time\'s up!",
                    type: 'editreply'
                }, interaction)
                inGame.delete(interaction.user.id)
                break;
            }

            if (['cancel', 'end'].includes(msg.first().content.toLowerCase().trim())) {
                msg.first().delete();
                client.succNormal({
                    text: "Finalizado!",
                    type: 'editreply'
                }, interaction)
                inGame.delete(interaction.user.id)
                break
            } else if (msg.first().content.toLowerCase().trim() === ogSentence.toLowerCase()) {
                msg.first().delete();
                client.succNormal({
                    text: `Lo hiciste en ${ms(Date.now() - time, { long: true })}!`,
                    type: 'editreply'
                }, interaction)
                break;
            } else {
                client.errNormal({
                    error: "Desgraciadamente no tuviste éxito!",
                    type: 'editreply'
                }, interaction)
                inGame.delete(interaction.user.id)
                break;
            }

            if (i === 25) {
                client.succNormal({ text: `Lo lograste!`, type: 'editreply' }, interaction)
                inGame.delete(interaction.user.id)
                break
            }
        }
    }

    start()
}

 