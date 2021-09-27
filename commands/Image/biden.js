const { MessageEmbed, Message } = require("discord.js")
module.exports = {
  name : "biden",
  description: 'Biden Tweet',
  run: async (client, message, args) => {
    const text = args.join(" ");
    if(!text) return message.channel.send("**Please type text!**")
    let embed = new MessageEmbed()
      .setImage(`https://api.popcat.xyz/biden?text=${encodeURIComponent(text)}`)
      .setColor('#000488');
    message.channel.send({embeds: [embed]})
  }
}