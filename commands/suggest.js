module.exports = {
    name: 'suggest',
    description: 'Leave feedback for Geometer.',
    category: 'main',
    usage: '<message>',
    aliases: ['suggestion', 'feedback', 'request'],
    execute(message, args, Discord, client) {
        if (!args[0]) {
            return message.channel.send('Correct Usage: =feedback <message>');
        }
        const channel = client.channels.cache.get('780486412138840084');
        const feedbackEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle('New feedback!')
        .setDescription(args.join(' '))
        .setTimestamp();
        message.channel.send('Your feedback has been sent! Please wait for the developers to review it.');
        channel.send(feedbackEmbed);
    }
}