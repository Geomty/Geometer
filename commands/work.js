const fs = require('fs');
module.exports = {
    name: 'work',
    description: 'Earn cubits.',
    category: 'economy',
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
        if (balanceArray[0].indexOf(message.author.id) === -1) {
            async function asyncFunction() {
                await balanceArray[0].push(message.author.id);
                await balanceArray[0].push(100);
                const workEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
                .setTitle(`Welcome to the economy system!`)
		.setDescription(`You have ${balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]} cubits in your pocket.`)
                .setTimestamp();
	            message.channel.send(workEmbed);
                fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
                console.log(balanceArray);
            }
            asyncFunction();
        } else {
            function randomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
	    let num = randomInt(100, 250);
            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) + num;
            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
            const workEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
	    .setTitle("Yay, you didn't get fired today.")
            .setDescription(`${num} cubits have dropped in your pocket! You now have ${balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]} cubits.`)
            .setTimestamp();
            message.channel.send(workEmbed);
            fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
        }
    }
}
