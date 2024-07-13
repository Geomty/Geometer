module.exports = {
    name: 'info',
    description: 'Shows information about the bot.',
    category: 'main',
    execute(message, args, Discord, client) {
        var ramUsage = parseInt(process.memoryUsage().heapUsed / 1024 / 1024);
        let totalSeconds = (client.uptime / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#FDECA6')
        .setTitle('Geometer Information')
        .setDescription('Thank you for using Geometer!')
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .addFields(
            { name: 'Creator:', value: client.users.cache.get('704355591686062202').tag},
            { name: 'Stats:', value: `${client.guilds.cache.size} Servers
${client.channels.cache.size} Channels
${client.users.cache.size} Users` },
            { name: 'Programs Used:', value: `Discord.js v${Discord.Constants.Package._id.slice(11, Discord.Constants.Package._id.length)}
Node.js ${process.version}`},
            { name: 'RAM Usage:', value: ramUsage + 'MB / 12GB' },
            { name: 'Uptime:', value: minutes + ' Minutes' },
            { name: 'Links:', value: `Website: https://www.geometer.tk
Invite Me: https://www.geometer.tk/invite
Support Server: https://www.geometer.tk/server
YouTube Channel: https://www.geometer.tk/youtube`},
            { name: 'Created On:', value: client.user.createdAt },
        )
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(infoEmbed);
    }
}
