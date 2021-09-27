const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "clap",
    description: "Clapify your text!",
    //
    aliases: ["clapify"],
    // usages: [],
    // botPermissions: [],
    // userPermissions: [],
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if(!args.length) {
            return message.reply({content: `⚠ • Please supply some text!`})
        }
        message.reply({content: `${args.join(" ").split("").join("👏")}`})
    }
}