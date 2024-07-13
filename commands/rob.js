const fs = require('fs');
module.exports = {
    name: 'rob',
    description: 'Steal someone\'s cubits.',
    category: 'economy',
    usage: '<user>',
    aliases: ['steal', 'mug'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
        const user = message.mentions.users.first();
	    if (balanceArray[0].indexOf(message.author.id) === -1) {
	        return message.channel.send("You haven't started earning money yet! A quick and easy way to make money is with =work.");
	    }
	    if (!args[0]) {
	        return message.channel.send('Correct Usage: =rob <user>');
	    }
	if (!user) {
	    return message.channel.send('Correct Usage: =rob <user>');
	}
        if (user.id === '744626726222692389') {
            return message.channel.send("That's me!");
        }
        if (user.bot) {
            return message.channel.send("Sorry to betray my own kind, but bots can't have cubits!")
        }
	    if (message.author.id === user.id) {
	        return message.channel.send("What, ya tryna rob yourself?");
	    }
	    if (balanceArray[0].indexOf(user.id) === -1) {
	        return message.channel.send("This user hasn't started earning money yet! Ask them to join the fun with =work.");
	    }
	    if (parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) < 1000) {
	        return message.channel.send("You need at least 1000 cubits to rob from somebody.");
	    }
	    if (parseInt(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]) < 1000) {
	        return message.channel.send("That person doesn't have at least 1000 cubits.");
	    }
	    let num = Math.round(Math.random()*5);
	    let numTwo = Math.round(Math.random()*1000);
	    if (num === 0) {
	        balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]) - parseInt(numTwo);
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) + parseInt(numTwo);
			balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] = String(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]);
			balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            const robEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("Enjoy your free money.")
	    .setDescription("You managed to steal " + numTwo + " cubits from " + user.tag + "!")
            .setTimestamp();
	        message.channel.send(robEmbed);
            const robEmbedTwo = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("That's gotta hurt.")
	    .setDescription("Someone just stole " + numTwo + " cubits from you in " + message.guild.name + ".")
            .setTimestamp();
	        user.send(robEmbedTwo).catch(err => {
		        console.log(err);
	        });
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
	    } else {
	        balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]) + parseInt(numTwo);
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(numTwo);
			balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]);
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            const robEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("Uh oh, you were caught.")
	    .setDescription("You paid " + user.tag + " " + numTwo + " cubits.")
            .setTimestamp();
	        message.channel.send(robEmbed);
            const robEmbedTwo = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle(`Phew, you're safe for now.`)
	    .setDescription(`Someone tried to steal from you in ${message.guild.name} but was caught and paid you ${numTwo} cubits.`)
            .setTimestamp();
	        user.send(robEmbedTwo).catch(err => {
		        console.log(err);
	        });
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
	    }
    }
}
