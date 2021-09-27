const { Client, Message, MessageEmbed, MessageAttachment } = require("discord.js")
const canvacord = require('canvacord')
module.exports = {
    name: "jokeoverhead",
    description: "seems like they missed it",
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
        message.reply({content: `⚠ • Editing photo...`}).then(async (msg) => {
        let member = message.mentions.members.first()
        const av = member.user.displayAvatarURL({dynamic: false, format: "png"})
        const img = await canvacord.Canvas.jokeoverhead(av, false)
        const attachment = new MessageAttachment(img, "Edited_photo.png")
        msg.edit({ content: `🔷 • Photo rendered!`,files: [attachment]})
        })
        

        
    }
}