const { MessageEmbed } = require("discord.js");
const text = require("../../data/duoi.json");
const texts = text[Math.floor(Math.random() * text.length)];
const dau = require("../../data/dau.json")
const daus = dau[Math.floor(Math.random() * dau.length)];
module.exports = {
    name: 'test',
    run: async(client,message) => {
    const embed1 = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`✅ **${daus}${texts} coin**`)
    message.channel.send({embeds: [embed1]})
    }
}