const fs = require('fs');
const shopTwo = fs.readFileSync('./arrays/shop.txt', 'utf-8');
const shop = shopTwo.split(',');
module.exports = {
    name: 'shop',
    description: 'See which items are up for sale.',
    category: 'economy',
    aliases: ['shop'],
    execute(message, args, Discord, client, querystring, fetch) {
        let shopMessage = "What's up for sale?\n\n";
        for (const item of shop) {
            const itemArray = item.split(';');
            shopMessage += `Item: ${itemArray[0]}\nDescription: ${itemArray[1]}\nPrice: ${itemArray[2]} cubits\n\n`;
        }
        const shopEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Geometer Shop')
        .setDescription(shopMessage)
        .setFooter(`Requested by ${message.author.tag}`);
        message.channel.send(shopEmbed);
    }
}
