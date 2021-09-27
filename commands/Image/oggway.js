const { Message, Client, MessageAttachment } = require("discord.js");

module.exports = {
    name: "oggway-master",
    description: "He never lies",
    aliases: ["oggway", "master"],
    run: async (client, message, args) => {

        let text = args.slice(0).join(" ");

        if (!text) return message.reply({ content: ':dnd: **what do i put on the image dumbass**' });

        let final = "https://luminabot.xyz/api/image/oogway?text=" + encodeURIComponent(text)
        const att = new MessageAttachment(final, 'oogway.png', null)

        message.channel.send({
            files: [att]
        });


        // API Used: https://luminabot.xyz/api/ 

    }
} 