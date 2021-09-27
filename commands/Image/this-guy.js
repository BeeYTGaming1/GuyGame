const { Message, Client, MessageAttachment } = require("discord.js");

module.exports = {
    name: "this-guy",
    description: "Get a load of this guy",
    aliases: ["av"],
    run: async (client, message, args) => {
      const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: "png" });

        const finalLink = `https://api.leoapi.xyz/image/this-guy?image=${avatar}`

        const attach = new MessageAttachment(`${finalLink}`, null)

        message.channel.send({ files: [attach]})
    }
}