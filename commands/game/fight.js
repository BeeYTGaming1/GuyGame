const game = require('discord-fight-game');

module.exports = {
    name: 'fight',
    aliases: ['fighting'],
    run: async(client, message, args) => {
        let player2 = message.mentions.members.first()
        if(!player2) return message.channel.send("*Please choose a player*")
        const fight = new game(client, {
            // Custom Buttons
            oneName: "Puch",
            oneEmoji: "🤛",
            twoName: "Bow",
            twoEmoji: "🏹",
            threeName: "Dodge",
            threeEmoji: "👻",
            endName: "End Game",
            endEmoji: "🛑",
        
            // Custom Messages
            startMessage: "**⚠The war has begun, get ready warriors⚠**",
            midMessage: "**The fighters✈ chose their move🎌, Current battle condition :**",
            endMessage: "{winner} gloriously defeated {looser}",
            forceEndMessage: "{user} was scared so they ended the war",
            timeEndMessage: "{user} ran away from the war",
            //  Starting health of players
            startHealth: 100,

            // Melee move's settings ( First / One Move )
            maxMelee: 20, // Maximum Melee damage possible
            minMelee: 2, // Minimum Melee damage possible
            meleeSuccessRate: 55, // Chance of successful attack
            meleeTimeoutRate: 29, // Chances of getting timedout from using Melee attack again

            // Ranged move's settings ( Second / Two Move )
            maxRanged: 30, // Maximum Ranged damage possible
            minRanged: 10, // Minimum Ranged damage possible
            rangedSuccessRate: 50, // Chance of successful attack
            rangedTimeoutRate: 50, // Chances of getting timedout from using Ranged attack again

            // Defense move's settings ( Third / Three Move )
            maxDefense: 20, // Maximum defense damage possible
            minDefense: 3, // Minimum defense damage possible
            defenseSuccessRateAgainstDefense: 50, // Chance of successful defense against defense
            defenseSuccessRateAgainstMelee: 60, // Chance of successful defense against Melee
            defenseSuccessRateAgainstRanged: 35, // Chance of successful defense against Ranged
            defenseTimeoutRate: 55,// Chances of getting timedout from using defense again  
        })
        fight.duo(message,player2) 
    }
}
