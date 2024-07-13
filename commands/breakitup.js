module.exports = {
    name: 'breakitup',
    description: 'Break up a fight without muting people',
    category: 'mod',
    aliases: ['biu'],
    guildOnly: true,
    execute(message, args, Discord) {
        if (message.member.permissions.has("MUTE_MEMBERS") || message.author.id === '704355591686062202') {
            for(i = 0; i < 10; i++) {
                const breakitupEmbed = new Discord.MessageEmbed()
                .setColor('#F04947')
                .setTitle('🛑 HEY, YOU!!!')
                .setDescription('BREAK UP THIS FIGHT RIGHT NOW!!!')
                .setTimestamp();
                message.channel.send(breakitupEmbed);
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.')
        }
    }
}
