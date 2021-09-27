const { CommandInteraction, MessageEmbed} = require("discord.js");
const Zalgo = require("to-zalgo");

module.exports = {
  name: 'zalgo',
    description: 'Description',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'text',
            description: 'Text To Zalgo',
            type: 'STRING',
            required: true
        }
    ],

run: async(client, interaction, args) => {

   const zalgo = Zalgo(args.join(" "))
   if (zalgo.includes("@")) return interaction.followUp("Me No Want Ping");

    const embed = new MessageEmbed()
    .addField('Text Zalgo',`\`\`\`\n${zalgo}\`\`\``)
    .setColor("#000488")
    interaction.followUp({ embeds: [embed] })
}
}