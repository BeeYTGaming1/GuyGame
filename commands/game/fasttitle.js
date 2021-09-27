const reflex = require("discord-reflex-speed");
module.exports = {
    name: 'fasttype',
    aliases: ['reflex'],
    run: async(client, message, args) => {
        const game = new reflex({
            // Normal game settings 
            endIn: 6969,
            startAfter: "random", // or time in millseconds
        
            // Embed settings when game is getting ready
            readyColor: "#fr7434",
            readyTitle: "**⚠Get your toes in positon cause game is gonna start soon⚠**",
        
            // Embed settings when game is started
            startColor: "#1c64e3",
            startTitle: "TYPE *{word}* FAST ELSE YOU LOST!",
        
            // Embed settings when game ends after a timeout
            timeEndColor: "#000000",
            timeEndTitle: "**You all are faliures🐢**",
        
            // Embed settings when game is ended
            endTitle: "**GAME ENDED**",
            endDescription: "Game ended winner is : **{winner}** in time `{time}`",
            endColor: "#ff0000",
        
            // The array of random words
            words: ["hi", "die", "bye", "soon", "card", "nope", "yep", "loli", "music", "dio", "jotaro", "too", "love", "nothing", "ready", "friend", "gg", "google", "good", "off", "over", "strengs", "ok", "your", "pens", "oh"]
        })
        game.solo(message)
    }
}