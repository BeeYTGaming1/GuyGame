const { MessageEmbed, CommandInteraction } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
  name: 'google',
  description: 'Search from google',
  type: 'CHAT_INPUT',
  options: [
    {
      name: 'query',
      description: 'what you want to search',
      type: 'STRING',
      required: true
    }
  ],
  run: async(client, interaction) => {

    const Query = interaction.options.getString('query');

    let query = Query.split(" ").join("+")

   
let search = new Discord.MessageEmbed()
                .setTitle(` Browser`)
                .setDescription(`\`\`\`\n🔍 | ${query}   \`\`\``)
        .addField("Top Search Result:", `[Click Here](https://www.google.com/search?q=${query})`)
        .addField("Other Search Results", `[Click Here](https://www.bing.com/search?q=${query})`)
                .setColor('ff0000')
                .setFooter(`Search Results - 2 `);
    interaction.followUp({
      embeds: [search]
    })  
  }
}