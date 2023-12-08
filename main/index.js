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


client.login("MTE4Mjc4MDc2OTA0Mzc1MDk5Mg.Gn3-Ep.dEzV_NrWfY4fp4j1emozDapcTt5-hAmB1pTLu0");