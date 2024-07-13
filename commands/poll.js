module.exports = {
    name: 'poll',
    description: 'Create a poll for other users to vote on.',
    category: 'fun',
    usage: '<message>',
    aliases: ['ask', 'question'],
    execute(message, args, Discord) {
        const pollConst = args[0];
        if (pollConst) {
            message.delete();
            const pollEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Poll created by ${message.author.tag}`)
            .setDescription(args.join(' '))
            .setThumbnail(message.author.displayAvatarURL() + '?size=32')
            .setFooter('React to vote!')
            .setTimestamp();
            message.channel.send(pollEmbed).then(sentEmbed =>{
                sentEmbed.react('774026704997056523');
                sentEmbed.react('774026705484120094');
            });
        } else {
            message.channel.send('Correct Usage: =poll <message>');
        }
    }
}
