const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: "mixnames",
    description: "Mix 2 names together",
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
        const arg = args.join(" ").split(" ? ")
        const member1 = message.mentions.members.first()
        const member2 = message.mentions.members.first()
        if(!member1 || !member2) {
            return message.reply({content: `⚠ • Please supply 2 valid members split by a \` ? \`!`})
        }
        let name = `${member1.user.username.split("").slice(0, (member1.user.username.length / 2 )).join("")}${member2.user.username.split("").slice(0, (member2.user.username.length / 2 )).join("")}`
        message.reply({content: `🔷 • ${name}`})
    }
}