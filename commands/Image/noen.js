const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'noel',
    aliases: 'nel',
    description: "The letter you sent to Santa Claus",
    run: async(client, message, args) => {
        const memetemplate = args[0];
        if (!memetemplate) {
            return message.channel.send("Enter `text` in letter!");
        }
        const noel = new MessageEmbed()
            .setTitle("This is letter you give Santa Claus")
            .setColor('GREEN')
            .setImage(
                `https://api.sekisui.ml/api/santa?text=${memetemplate}`
            )
            .setTimestamp();
            
        message.reply({embeds: [noel]})
    }
}