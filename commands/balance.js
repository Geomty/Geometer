module.exports = {
    name: 'balance',
    description: 'Check how many cubits and items you have.',
    category: 'economy',
    usage: '<user (optional)>',
    aliases: ['bal', 'inventory', 'inv'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray) {
        if (balanceArray[0].indexOf(message.author.id) === -1) {
            message.channel.send("You haven't started earning money yet! A quick and easy way to make money is with =work.");
        } else {
	        const user = message.mentions.users.first() || message.author;
            if (user.id === '744626726222692389') {
                return message.channel.send("That's me!");
            }
            if (user.bot) {
                return message.channel.send("Sorry to betray my own kind, but bots can't have cubits!")
            }
	        if (user == message.author) {
                if (inventoryArray[0].indexOf(message.author.id) === -1) {
                    const balEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
                    .setTitle(`Balance:`)
                    .setDescription(`${balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]} cubits`)
                    .addFields(
                        { name: 'Inventory:', value: 'Nothing :thinking:' }
                    )
                    .setTimestamp();
                    return message.channel.send(balEmbed);
                }
                const balEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
                .setTitle(`Balance:`)
                .setDescription(`${balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]} cubits`)
                .addFields(
                    { name: 'Inventory:', value: inventoryArray[0][inventoryArray[0].indexOf(message.author.id) + 1].split(';').join('\n') }
                )
                .setTimestamp();
                message.channel.send(balEmbed);
	        } else {
		        if (balanceArray[0].indexOf(user.id) === -1) {
		            return message.channel.send("This person hasn't starting earning money yet! Ask them to join the fun with =work.");
		        } else if (inventoryArray[0].indexOf(user.id) === -1) {
                    const balEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(user.tag, 'https://cdn.discordapp.com/avatars/' + user.id + '/' + user.avatar + '.webp')
                    .setTitle(`Balance:`)
                    .setDescription(`${balanceArray[0][balanceArray[0].indexOf(user.id) + 1]} cubits`)
                    .addFields(
                        { name: 'Inventory:', value: 'Nothing :thinking:' }
                    )
                    .setTimestamp();
                    return message.channel.send(balEmbed);
                }
                const balEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(user.tag, 'https://cdn.discordapp.com/avatars/' + user.id + '/' + user.avatar + '.webp')
                .setTitle(`Balance:`)
                .setDescription(`${balanceArray[0][balanceArray[0].indexOf(user.id) + 1]} cubits`)
                .addField(
                    { name: 'Inventory:', value: inventoryArray[0][inventoryArray[0].indexOf(user.id) + 1].join('\n') }
                )
                .setTimestamp();
                message.channel.send(balEmbed);
	        }
        }
    }
}
