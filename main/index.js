const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.MessageContent
    ]
})


client.on("ready", (c) => {
    console.log(`Client ready for use! ${c.user.username} version: Unknown`)
})

client.on("messageCreate", (message) => {
    console.log(`User: ${message.author.username}, Content: ${message.content}`)

    if(message.content == "kosbot-replytest") {
        message.reply(`Replying to ${message.author.username}`)
    }
})

client.login("MTE4Mjc4MDc2OTA0Mzc1MDk5Mg.Gn3-Ep.dEzV_NrWfY4fp4j1emozDapcTt5-hAmB1pTLu0");