const { Client, Message, MessageEmbed } = require("discord.js")
//169th command
module.exports = {
    name: "choose",
    description: "Make me choose an option!",
    //
    // owner: true,
    // aliases: [],
    // usages: [],
    // botPermissions: [],
    // userPermissions: [],
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args.length) return message.reply({content: `⚠ • Please supply some choices!`})
        const arg = args.join(" ").split(" | ")
        if(!arg.length || arg.length < 2) {
            return message.reply({content: `⚠ • Please supply 2 or more choices!`})
        }
        if(message.mentions.roles.first()) {
            return message.reply({content: `⚠ • Please supply do not ping in your message!`})
        }
        return message.reply({content: `🔷 • I choose... **${arg[Math.floor(Math.random() * arg.length)]}**`})
    }
}