const discord = require("discord.js");
const fetch = require("node-fetch")
const client = require("../../config.json")
module.exports = {
    name: "pokenight",
    aliases: ['poke'],
    run: async (bot, message, args) => {
        let channel = message.member.voice.channel;
        const ee = new discord.MessageEmbed()
        .setTitle("**❌ You need in the __VOICE__ channel!**")
        .setColor("RED")
    if (!channel) return message.channel.send({embeds: [ee]})

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713 ",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send("Sadly I can't start the game")
            const e = new discord.MessageEmbed()
                .setColor('#00ecff')
                .setTitle("**Poker Night Game**")
                .setURL('https://discord.com/api/oauth2/authorize?client_id=890580200755179591&permissions=8&scope=bot%20applications.commands')
                .setAuthor(`JustDio#9277`, 'https://cdn.discordapp.com/avatars/825989501288972288/634ae42414f8ff7a668969fe71c547f9.png?size=4096', 'https://discord.gg/xUkVDuYj4V')

                .setThumbnail('https://i.imgur.com/PRYgJ9m.png')
                .setDescription(`[**CLICK ME TO PLAY POKER NIGHT 🎮**](https://discord.com/invite/${invite.code})`)
                .setFooter("Powered by JustDio")
            message.channel.send({embeds: [e]})
        })

    }
}