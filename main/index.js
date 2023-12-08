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


client.login("MTE4Mjc4MDc2OTA0Mzc1MDk5Mg.G7hw_P.h90F8suqSslIk-j4IIl7wC24fPwxfOO2-_lI8s");