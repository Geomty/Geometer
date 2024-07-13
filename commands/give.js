const fs = require('fs');
module.exports = {
    name: 'give',
    description: 'Give somebody your cubits.',
    category: 'economy',
    usage: '<user> <number>',
    aliases: ['gift'],
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
        const user = message.mentions.users.first();
	    if (balanceArray[0].indexOf(message.author.id) === -1) {
	        return message.channel.send("You haven't started earning money yet! A quick and easy way to make money is with =work.");
	    }
	    if (!args[1]) {
	        return message.channel.send('Correct Usage: =give <user> <number>');
	    }
	if (!user) {
	    return message.channel.send('Correct Usage: =give <user> <number>');
	}
        if (user.id === '744626726222692389') {
            return message.channel.send("That's me!");
        }
        if (user.bot) {
            return message.channel.send("Sorry to betray my own kind, but bots can't have cubits!")
        }
	if (user == message.author) {
	    return message.channel.send('What, ya tryna gift money to yourself?');
	}
	if (args[1] === '0') {
	    return message.channel.send("Meanie, you can't gift someone zero coins!");
	}
	    if (balanceArray[0].indexOf(user.id) === -1) {
	        return message.channel.send("This user hasn't started earning money yet! Ask them to join the fun with =work.");
	    }
	    if (args[1] === 'all') {
	        let all = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
	        balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]) + parseInt(all);
            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]);
            const giveEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("Thank you kind person!")
	    .setDescription("Successfully gave " + all + " cubits to " + user.tag)
            .setTimestamp();
	        message.channel.send(giveEmbed);
            const giveEmbedTwo = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle("Go say thank you!")
	    .setDescription("A kind person has sent " + all + " cubits your way in " + message.guild.name + "!")
            .setTimestamp();
            user.send(giveEmbedTwo).catch(err => {
                console.log(err);
            });
	        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            return console.log(balanceArray);
	    }
	    if (!parseInt(args[1])) {
	        return message.channel.send('You must specify a number.');
	    }
	    if (parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) < parseInt(args[1])) {
	        return message.channel.send('You do not have that much money.');
	    }
        balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(args[1]);
        balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]) + parseInt(args[1]);
        balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
        balanceArray[0][balanceArray[0].indexOf(user.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(user.id) + 1]);
        const giveEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
        .setTitle("Thank you kind person!")
	.setDescription("Successfully gave " + args[1] + " cubits to " + user.tag)
        .setTimestamp();
        message.channel.send(giveEmbed);
        const giveEmbedTwo = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
        .setTitle("Go say thank you!")
	.setDescription("A kind person has sent " + args[1] + " cubits your way!")
        .setTimestamp();
        user.send(giveEmbedTwo).catch(err => {
            console.log(err);
        });
        fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
        return console.log(balanceArray);
    }
}
