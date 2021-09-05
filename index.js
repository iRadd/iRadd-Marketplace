const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS],
});
const config = require('./config');

client.on('ready', () => {
    console.log(`Ready. Logged as ${client.user.tag}`);

    client.user.setPresence({
        status: "dnd"
    });

    client.user.setActivity('Netflix', { type: 'WATCHING' });
});

client.on('messageCreate', async (message) => {
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    if (
        /pay|rent|Pay|PAY|Rent|RENT/.test(message.content) && message.channel.id !== config.payRentHelpChannelID
    ) {
        message.channel.send({
            content: `> Your message seems to be related towards how to pay channel rent with Marketplace.\n> Try checking out <#${config.payRentHelpChannelID}> or check out the video in <#749577012456325210> if you are learning to pay for rent for further information!`,
            reply: {
                messageReference: message.id,
            },
        });
    } else if (
        /verified|trader|Verified|VERIFIED|Trader|TRADER/.test(message.content) && message.channel.id !== config.getVerifiedTraderChannelID
    ) {
        message.channel.send({
            content: `> Your message seems to be related towards how to get the Verified Trader Role on this discord.\n> Try checking out <#${config.getVerifiedTraderChannelID}> for further information!`,
            reply: {
                messageReference: message.id,
            },
        });
    } else if (
        /premium|channel|advertisement|Premium|PREMIUM|Channel|CHANNEL|Advertisement|ADVERTISEMENT/.test(message.content) && message.channel.id !== config.tradeChannelID
    ) {
        message.channel.send({
            content: `> Your message seems to be related towards how to buy an advertisement channel.\n> Try checking out <#${config.buyAnAdChChannelID}> for further information!`,
            reply: {
                messageReference: message.id,
            },
        });
    } else if (
        /buying|selling|Buying|Selling|BUYING|SELLING/.test(message.content) && message.channel.id !== config.tradeChannelID
    ) {
        message.channel.send({
            content: `> Your message seems to be refering to selling and/or buying an item.\n> Refer to <#${config.tradeChannelID}> if you are wanting to buy and/or sell something!`,
            reply: {
                messageReference: message.id,
            },
        });
    } else if (
        /help|Help|HELP/.test(message.content)
    ) {
        message.channel.send({
            content: `> You seem to need help around here.\n> Try checking out the information in <#749232116096565258>, <#749577095558070282>, or <#761731886983675924> to see if they answer your questions!`,
            reply: {
                messageReference: message.id,
            },
        });
    } else if (
        /puschel|<:Puschel:838423784897118218>|Puschel|PUSCHEL/.test(message.content)
    ) {
        message.channel.send({
            content: `<:Puschel:838423784897118218>`,
            reply: {
                messageReference: message.id,
            },
        });
    }
});

client.login(config.token);

// else if (
//     /start|company|business|Start|Company|Business|START|COMPANY|BUSINESS/.test(message.content) && message.channel.id !== config.tradeChannelID
// ) {
//     message.channel.send({
//         content: `> You seem to be wanting some advice on how to jumpstart your company and/or sell lots of profit.\n> Try asking us questions in <#${config.startCompanyChannelID}> for advice on how to make lots of profit of your business!`,
//         reply: {
//             messageReference: message.id,
//         },
//     });
// }