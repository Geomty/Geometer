const fs = require('fs');
module.exports = {
    name: 'gamble',
    description: 'Gamble your cubits.',
    category: 'economy',
    usage: '<number>',
    aliases: ['bet'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
	    if (balanceArray[0].indexOf(message.author.id) === -1) {
	        return message.channel.send("You haven't started earning money yet! A quick and easy way to make money is with =work.");
	    }
	    if (!args[0]) {
	        return message.channel.send('Correct Usage: =gamble <number>');
	    }
	    if (parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) < 1000) {
	        return message.channel.send("You need at least 1000 cubits to gamble.");
        }
	if (args[0] === 'all') {
	    let numThree = Math.round(Math.random()*5);
	    let all = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
	    if (numThree === 0) {
                let numFour = parseInt(all)*5;
	        balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) + numFour;
	        balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
                const gambleEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
                .setTitle("You won!!!")
	        .setDescription("You received " + numFour + " cubits! Congratulations!")
                .setTimestamp();
	        message.channel.send(gambleEmbed);
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
                return console.log(balanceArray);
	    } else {
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(all);
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            const gambleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("You lost.")
	    .setDescription("Poof goes your " + all + " cubits.")
            .setTimestamp();
	        message.channel.send(gambleEmbed);
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            return console.log(balanceArray);
	    }
	}
        if (!parseInt(args[0])) {
	        return message.channel.send("You must specify a number.");
	    }
	    if (parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) < parseInt(args[0])) {
	        return message.channel.send("You do not have that many cubits.");
	    }
	    let num = Math.round(Math.random()*5);
	    if (num === 0) {
            let numTwo = parseInt(args[0])*5;
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) + numTwo;
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            const gambleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("You won!!!")
	    .setDescription("You received " + numTwo + " cubits! Congratulations!")
            .setTimestamp();
	        message.channel.send(gambleEmbed);
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
	    } else {
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(args[0]);
			balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            const gambleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("You lost.")
	    .setDescription("Poof goes your " + args[0] + " cubits.")
            .setTimestamp();
	        message.channel.send(gambleEmbed);
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
	    }
    }
}
