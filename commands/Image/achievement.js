const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  aliases: ["ach"],
  run: async (client, message, args) => {
    const text = args.join("+");
    if(!text) return message.channel.send("**Please type text!**")
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send({embeds: [e]});
  },
};