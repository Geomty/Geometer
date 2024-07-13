const fs = require('fs');
module.exports = {
    name: 'deletemydata',
    description: 'Delete all your data.',
    category: 'economy',
    aliases: ['dmd'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray) {
	    if (balanceArray[0].indexOf(message.author.id) === -1) {
	        return message.channel.send("Funny, you haven't even started earning money yet! A quick and easy way to make money is with =work.");
	    }
	    message.channel.send('__**THIS COMMAND WILL DELETE ALL YOUR DATA, INCLUDING COINS AND ITEMS. ARE YOU SURE YOU WANT TO CONTINUE?! THIS ACTION IS IRREVERSIBLE!!!**__ (yes or no, you have 10 seconds to respond before I cancel automatically)');
        const filter = m => m.content === 'yes' && m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { time: 10000 });
        collector.on('collect', m => {
            balanceArray[0].splice(balanceArray[0].indexOf(message.author.id) + 1, 1);
            balanceArray[0].splice(balanceArray[0].indexOf(message.author.id), 1);
            inventoryArray[0].splice(inventoryArray[0].indexOf(message.author.id) + 1, 1);
            inventoryArray[0].splice(inventoryArray[0].indexOf(message.author.id), 1);
            message.channel.send("All your data has been removed from my database. Don't come whining to the devs if you regret doing this, because they can't get your data back.");
            fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            fs.writeFileSync('./arrays/inventoryArray.txt', inventoryArray);
            console.log(balanceArray);
            console.log(inventoryArray);
            collector.stop();
            return collector2.stop();
        });
        const filter2 = m => m.content === 'no' && m.author.id === message.author.id;
        const collector2 = message.channel.createMessageCollector(filter2, { time: 10000 });
        collector2.on('collect', m => {
            message.channel.send("Good choice, your coins and items are here to stay.");
            collector.stop();
            return collector2.stop();
        });
    }
}
