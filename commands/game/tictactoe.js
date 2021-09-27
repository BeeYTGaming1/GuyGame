const simplydjs = require('simply-djs');
module.exports = {
    name: 'tictactoe',
    aliases: ['caro'],
    run: async(client, message, args) => {
        const simplydjs = require('simply-djs')
        simplydjs.tictactoe(message, {
            xEmoji: '❌', //default: ❌
            oEmoji: '⭕', //default: ⭕
            idleEmoji: '➕', //default: ➖
            embedColor: '#075FFF', //default: #075FFF
            embedFoot: 'Make sure to win' //default: 'Make sure to win ;)' 
        })
    }
}