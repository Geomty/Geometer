module.exports = {
    name: 'googlesearch',
    description: 'Search something up on Google.',
    category: 'fun',
    execute(message, args, Discord, client, querystring) {
        const query = querystring.stringify({ q: args.join(' ') });
        const searchConst = message.content.slice(13, message.content.length);
        if (searchConst) {
            const searchEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Click here to search up: ' + message.content.slice(12, message.content.length))
            .setURL(`https://www.google.com/search?${query}`);
            message.channel.send(searchEmbed);
        } else {
            message.channel.send('Correct Usage: =search <text>');
        }
    }
}
