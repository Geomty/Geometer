module.exports = {
    name: 'userinfo',
    description: 'Shows information on a user.',
    category: 'mod',
    usage: '<user (optional)>',
    aliases: ['ui', 'user'],
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.author;
        const member = message.guild.member(user);
        console.log(member);
        if (!member._roles.length) {
            if (user.presence.status == 'online') {
                const userinfoEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('User Information')
                .setDescription('Here is all the information I could find on that user.')
                .setThumbnail(user.displayAvatarURL())
                .addFields(
                    { name: 'Username:', value: `${user.tag}` },
                    { name: 'Nickname', value: member.nickname || user.username },
                    { name: 'User ID:', value: `${user.id}` },
                    { name: 'Current Status:', value: 'Online' },
                    { name: 'Account Creation Date:', value: user.createdAt },
                    { name: 'Guild Join Date:', value: member.joinedAt },
                    { name: 'Role(s):', value: `None` },
    	            { name: 'Highest Role:', value: member.roles.highest },
                )
                .setFooter(`Requested by ${message.author.tag}`);
                return message.channel.send(userinfoEmbed);
            } else if (user.presence.status == 'idle') {
                const userinfoEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('User Information')
                .setDescription('Here is all the information I could find on that user.')
                .setThumbnail(user.displayAvatarURL())
                .addFields(
                    { name: 'Username:', value: `${user.tag}` },
                    { name: 'Nickname', value: member.nickname || user.username },
                    { name: 'User ID:', value: `${user.id}` },
                    { name: 'Current Status:', value: 'Idle' },
                    { name: 'Account Creation Date:', value: user.createdAt },
                    { name: 'Guild Join Date:', value: member.joinedAt },
                    { name: 'Role(s):', value: `None` },
    	            { name: 'Highest Role:', value: member.roles.highest },
                )
                .setFooter(`Requested by ${message.author.tag}`);
                return message.channel.send(userinfoEmbed);
            } else if (user.presence.status == 'dnd') {
                const userinfoEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('User Information')
                .setDescription('Here is all the information I could find on that user.')
                .setThumbnail(user.displayAvatarURL())
                .addFields(
                    { name: 'Username:', value: `${user.tag}` },
                    { name: 'Nickname', value: member.nickname || user.username },
                    { name: 'User ID:', value: `${user.id}` },
                    { name: 'Current Status:', value: 'Do Not Disturb' },
                    { name: 'Account Creation Date:', value: user.createdAt },
                    { name: 'Guild Join Date:', value: member.joinedAt },
                    { name: 'Role(s):', value: `None` },
    	            { name: 'Highest Role:', value: member.roles.highest },
                )
                .setFooter(`Requested by ${message.author.tag}`);
                return message.channel.send(userinfoEmbed);
            } else if (user.presence.status == 'offline') {
                const userinfoEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('User Information')
                .setDescription('Here is all the information I could find on that user.')
                .setThumbnail(user.displayAvatarURL())
                .addFields(
                    { name: 'Username:', value: `${user.tag}` },
                    { name: 'Nickname', value: member.nickname || user.username },
                    { name: 'User ID:', value: `${user.id}` },
                    { name: 'Current Status:', value: 'Offline' },
                    { name: 'Account Creation Date:', value: user.createdAt },
                    { name: 'Guild Join Date:', value: member.joinedAt },
                    { name: 'Role(s):', value: `None` },
    	            { name: 'Highest Role:', value: member.roles.highest },
                )
                .setFooter(`Requested by ${message.author.tag}`);
                return message.channel.send(userinfoEmbed);
            }
        }
        if (user.presence.status == 'online') {
            const userinfoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('User Information')
            .setDescription('Here is all the information I could find on that user.')
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: 'Username:', value: `${user.tag}` },
                { name: 'Nickname', value: member.nickname || user.username },
                { name: 'User ID:', value: `${user.id}` },
                { name: 'Current Status:', value: 'Online' },
                { name: 'Account Creation Date:', value: user.createdAt },
                { name: 'Guild Join Date:', value: member.joinedAt },
                { name: 'Role(s):', value: `<@&${member._roles.join('>, <@&')}>` },
	            { name: 'Highest Role:', value: member.roles.highest },
            )
            .setFooter(`Requested by ${message.author.tag}`);
            message.channel.send(userinfoEmbed);
        } else if (user.presence.status == 'idle') {
            const userinfoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('User Information')
            .setDescription('Here is all the information I could find on that user.')
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: 'Username:', value: `${user.tag}` },
                { name: 'Nickname', value: member.nickname || user.username },
                { name: 'User ID:', value: `${user.id}` },
                { name: 'Current Status:', value: 'Idle' },
                { name: 'Account Creation Date:', value: user.createdAt },
                { name: 'Guild Join Date:', value: member.joinedAt },
                { name: 'Role(s):', value: `<@&${member._roles.join('>, <@&')}>` },
	            { name: 'Highest Role:', value: member.roles.highest },
            )
            .setFooter(`Requested by ${message.author.tag}`);
            message.channel.send(userinfoEmbed);
        } else if (user.presence.status == 'dnd') {
            const userinfoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('User Information')
            .setDescription('Here is all the information I could find on that user.')
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: 'Username:', value: `${user.tag}` },
                { name: 'Nickname', value: member.nickname || user.username },
                { name: 'User ID:', value: `${user.id}` },
                { name: 'Current Status:', value: 'Do Not Disturb' },
                { name: 'Account Creation Date:', value: user.createdAt },
                { name: 'Guild Join Date:', value: member.joinedAt },
                { name: 'Role(s):', value: `<@&${member._roles.join('>, <@&')}>` },
	            { name: 'Highest Role:', value: member.roles.highest },
            )
            .setFooter(`Requested by ${message.author.tag}`);
            message.channel.send(userinfoEmbed);
        } else if (user.presence.status == 'offline') {
            const userinfoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('User Information')
            .setDescription('Here is all the information I could find on that user.')
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                { name: 'Username:', value: `${user.tag}` },
                { name: 'Nickname', value: member.nickname || user.username },
                { name: 'User ID:', value: `${user.id}` },
                { name: 'Current Status:', value: 'Offline' },
                { name: 'Account Creation Date:', value: user.createdAt },
                { name: 'Guild Join Date:', value: member.joinedAt },
                { name: 'Role(s):', value: `<@&${member._roles.join('>, <@&')}>` },
	            { name: 'Highest Role:', value: member.roles.highest },
            )
            .setFooter(`Requested by ${message.author.tag}`);
            message.channel.send(userinfoEmbed);
        }
    }
}
