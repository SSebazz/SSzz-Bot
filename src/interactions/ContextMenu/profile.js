const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

const model = require('../../database/models/badge');
const Schema = require('../../database/models/profile');
const CreditsSchema = require("../../database/models/votecredits");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Bot profile')
        .setType(2),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const badgeFlags = {
            DEVELOPER: client.emotes.badges.developer,
            EVENT: client.emotes.badges.event,
            BOOSTER: client.emotes.badges.booster,
            BUGS: client.emotes.badges.bug,
            MANAGEMENT: client.emotes.badges.management,
            PREMIUM: client.emotes.badges.premium,
            SUPPORTER: client.emotes.badges.supporter,
            TEAM: client.emotes.badges.team,
            BOOSTER: client.emotes.badges.booster,
            PARTNER: client.emotes.badges.partner,
            VOTER: client.emotes.badges.voter,
            SUPPORT: client.emotes.badges.support,
            MODERATOR: client.emotes.badges.moderator,
            DESIGNER: client.emotes.badges.designer,
            MARKETING: client.emotes.badges.marketing,
            ACTIVE: client.emotes.badges.active,
            VIP: client.emotes.badges.vip
        }

        const flags = {
            ActiveDeveloper: "👨‍💻・Active Developer",
            BugHunterLevel1: "🐛・Discord Bug Hunter",
            BugHunterLevel2: "🐛・Discord Bug Hunter",
            CertifiedModerator: "👮‍♂️・Certified Moderator",
            HypeSquadOnlineHouse1: "🏠・House Bravery Member",
            HypeSquadOnlineHouse2: "🏠・House Brilliance Member",
            HypeSquadOnlineHouse3: "🏠・House Balance Member",
            HypeSquadEvents: "🏠・HypeSquad Events",
            PremiumEarlySupporter: "👑・Early Supporter",
            Partner: "👑・Partner",
            Quarantined: "🔒・Quarantined", // Not sure if this is still a thing
            Spammer: "🔒・Spammer", // Not sure if this one works
            Staff: "👨‍💼・Discord Staff",
            TeamPseudoUser: "👨‍💼・Discord Team",
            VerifiedBot: "🤖・Verified Bot",
            VerifiedDeveloper: "👨‍💻・(early)Verified Bot Developer",
        }


        const user = interaction.guild.members.cache.get(interaction.targetId);

        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                await interaction.deferReply({ fetchReply: true });
                let Badges = await model.findOne({ User: user.id });

                let credits = 0;
                const creditData = await CreditsSchema.findOne({ User: user.id });

                if (Badges && Badges.FLAGS.includes("DEVELOPER")) {
                    credits = "∞";
                }
                else if (creditData) {
                    credits = creditData.Credits;
                }

                if (!Badges) Badges = { User: user.id };

                const userFlags = user.flags ? user.flags.toArray() : [];

                client.embed({
                    title: `${client.user.username}・Profile`,
                    desc: '_____',
                    thumbnail: user.avatarURL({ dynamic: true }),
                    fields: [{
                        name: "👤┆Usuario",
                        value: user.username,
                        inline: true
                    },
                    {
                        name: "📘┆Discriminator",
                        value: user.discriminator,
                        inline: true
                    },
                    {
                        name: "🆔┆ID",
                        value: user.id,
                        inline: true
                    },
                    {
                        name: "👨‍👩‍👦┆Género",
                        value: `${data.Gender || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🔢┆Edad",
                        value: `${data.Age || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🎂┆Cumpleaños",
                        value: `${data.Birthday || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🎨┆Color favorito",
                        value: `${data.Color || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🐶┆Mascotas favoritas",
                        value: `${data.Pets.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🍕┆Comida favorita",
                        value: `${data.Food.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🎶┆Canciones favoritas",
                        value: `${data.Songs.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🎤┆Artistas favoritos",
                        value: `${data.Artists.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🎬┆Películas favoritas",
                        value: `${data.Movies.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "👨‍🎤┆Actores favoritos",
                        value: `${data.Actors.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🏴┆Origen",
                        value: `${data.Orgin || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "🎮┆Hobby's",
                        value: `${data.Hobbys.join(', ') || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "😛┆Estado",
                        value: `${data.Status || 'No fijado'}`,
                        inline: true
                    },
                    {
                        name: "📛┆Bot Insignias",
                        value: `${Badges.FLAGS ? Badges.FLAGS.map(flag => badgeFlags[flag]).join(' ') : 'None'}`,
                        inline: true
                    },
                    {
                        name: "🏷️┆Discord Insignias",
                        value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None' || 'None'}`,
                        inline: true
                    },
                    {
                        name: "💳┆Dcredits",
                        value: `${credits || 'None'}`,
                        inline: true
                    },
                    {
                        name: "ℹ️┆Sobre mí",
                        value: `${data.Aboutme || 'No fijado'}`,
                        inline: false
                    },], type: 'editreply'
                }, interaction);
            }
            else {
                return client.errNormal({ error: "No profile found! Open a profile with /profile create", type: 'ephemeral' }, interaction);
            }
        })
    },
};

 