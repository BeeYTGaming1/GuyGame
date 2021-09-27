const click = require('discord-clicking-game');
module.exports = {
    name: 'clickfast',
    aliases: ['click'],
    run: async(client, message, args) => {
        let player2 = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        if(!player2) return message.channel.send("*Please choose a player*")
        const game = new click("✅",// Emoji to use on correct button
        2000 || "random", // Time in which game starts after the ready message
        3000, // Time in which game auto ends , NOTE time should be in Milleseconds
        {
            win: "**🏆{winner} won in {time}**", // winning messages
            loose: "**🏳You so slowww!🐢**", // Game end message when no one clicks
            started: "**🎌Game is started click fast🖱**", // Game started message
            ready: "**⚠Get your toes in positon cause game is gonna start soon⚠**", // Ready message
        }
    )
    game.duo(message,player2);
    }
}