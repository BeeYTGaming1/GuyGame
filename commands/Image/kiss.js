const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
        name: "kiss",
        aliases: ['buss'],
        description: "kisses a person",
    run: async (bot, message, args) => {
        const url = 'https://waifu.pics/api/sfw/kiss';

        const member = message.mentions.members.first()

        const sender = message.author
        
        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error has occured, try again!`)
        }
       const embed1 = new MessageEmbed()
        .setDescription("please mention a member!")
        .setColor("RED")
        if (!args[0]) return message.channel.send({embeds: [embed1]});

        const embed = new MessageEmbed()
            .setDescription(`${member}, got kissed by ${sender}`)
            .setColor('#2f3136')
            .setImage(data.url)

        await message.channel.send({embeds: [embed]})
    }
}