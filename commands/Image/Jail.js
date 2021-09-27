const Discord = require("discord.js");

module.exports = {
  name: "jail",
  aliases: ["prison"],
  description: "Shows image of jail",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor("DARK_GREY")
    .setTitle("Jail")
    .setImage(
      `https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`
    )
    .setTimestamp();

    return message.channel.send({embeds: [Embed]});
  }
};