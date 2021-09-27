const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'simpID',
    aliases: 'simp',
    description: "make you card simp",
    run: async(client, message, args) => {
        const memetemplate = args[0];
        if (!memetemplate) {
            return message.channel.send("Enter `text` in top");
        }
        const memetext1 = args[1];
        if (!memetext1) {
            return message.channel.send("Enter `text` in bottom");
        }
        const embed = new MessageEmbed()
            .setTitle("CARD SIMP")
            .setDescription("Here, this is your card!")
            .setImage(
                `https://api.testiestsauce43.repl.co/sus/simpcard/simp=${memetemplate}&simpsfor=${memetext1}`
            )
            .setColor('GREEN')
            .setTimestamp();
            return message.channel.send({embeds: [embed]});
    }
}