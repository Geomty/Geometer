module.exports = {
    name: 'serverinfo',
    description: 'Shows information on the server.',
    category: 'mod',
    aliases: ['si', 'server'],
    guildOnly: true,
    execute(message, args, Discord) {
        let emojiArray = [];
        for (const emoji of message.guild.emojis.cache.array()) {
            emojiArray.push(`<:${emoji.name}:${emoji.id}>`);
        }
        const date = new Date(message.guild.createdAt);
        const serverinfoEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Server Information')
        .setDescription('Here is all the information I could find on the server.')
        .setThumbnail(message.guild.iconURL())
        .addFields(
            { name: 'Server Name:', value: message.guild.name },
            { name: 'Server ID:', value: message.guild.id },
            { name: 'Server Owner:', value: message.guild.owner },
            { name: 'Server Boosts:', value: message.guild.premiumSubscriptionCount },
            { name: 'Level:', value: message.guild.premiumTier },
            { name: 'Members:', value: `:green_circle: ${message.guild.presences.cache.filter(us => us.status == 'online').size}\n:yellow_circle: ${message.guild.presences.cache.filter(us => us.status == 'idle').size}\n:red_circle: ${message.guild.presences.cache.filter(us => us.status == 'dnd').size}\n:white_circle: ${message.guild.members.cache.size - message.guild.presences.cache.size}\n${message.guild.members.cache.size} Total Members` },
            { name: 'Maximum Member Count:', value: message.guild.maximumMembers },
            { name: 'Channels:', value: `${message.guild.channels.cache.filter(ch => ch.type == 'category').size} Categories\n${message.guild.channels.cache.filter(ch => ch.type == 'text').size} Text Channels\n${message.guild.channels.cache.filter(ch => ch.type == 'voice').size} Voice Channels\n${message.guild.channels.cache.size} Total Channels` },
            { name: 'Total Roles:', value: message.guild.roles.cache.size },
            { name: 'Highest Role:', value: message.guild.roles.highest },
            { name: 'Emojis:', value: `${emojiArray.join(' ')}\n${message.guild.emojis.cache.filter(em => em.animated != true).size} Static\n${message.guild.emojis.cache.filter(em => em.animated == true).size} Animated\n${message.guild.emojis.cache.size} In Total` },
            { name: 'Verification Level:', value: message.guild.verificationLevel },
            { name: 'Server Region:', value: message.guild.region },
            { name: 'Created On:', value: `${date.getUTCMonth}/${date.getUTCDate}/${date.getUTCFullYear} ${date.getUTCHour}:${date.getUTCMinutes}:${date.getUTCSeconds}` },
        )
        .setFooter(`Requested by ${message.author.tag}`);
        message.channel.send(serverinfoEmbed);
    }
}
