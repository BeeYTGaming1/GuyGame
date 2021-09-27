const { Client, Message, MessageEmbed, MessageAttachment } = require("discord.js")
const canvacord = require('canvacord')
module.exports = {
    name: "clyde",
    description: "clyde some text!",
    //
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
        if(!args.length) {
            return message.reply({content: `⚠ • Please supply some text!`})
        }
        message.reply({content: `⚠ • Clydeifying your text...`}).then(async (msg) => {
            let member = message.mentions.members.first() || message.guild.members.cache.find(m => m.id === args.join(" ") || m.user.username.toLowerCase() === args.join(" ").toLowerCase() || m.user.tag.toLowerCase() === args.join(" ").toLowerCase()) || message.member
            const img = await canvacord.Canvas.clyde(args.join(" "))
            const attachment = new MessageAttachment(img, "Edited_photo.png")
            msg.edit({ content: `🔷 • Photo rendered!`,files: [attachment]})
            })
        

        
    }
}