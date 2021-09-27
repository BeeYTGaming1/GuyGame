const { Message, Client, MessageAttachment } = require("discord.js");

module.exports = {
    name: "sponge-burn",
    description: "BURN IT",
    aliases: ['sponge'],
    run: async (client, message, args) => {
      const text = args.slice(0).join(' ')
      if(!text) return message.reply({ content: "Please provide text"})

        const finalLink = `https://api.leoapi.xyz/image/spongebob-burn?text=${encodeURIComponent(text)}`

        const attach = new MessageAttachment(finalLink, 'spongebob.png', null)

        message.channel.send({ files: [attach]})
    }
}