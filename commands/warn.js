module.exports = {
    name: 'warn',
    description: 'Warn a user.',
    usage: '<user> <reason>',
    category: 'mod',
    guildOnly: true,
    execute(message, args, Discord) {
        if (message.member.permissions.has("MUTE_MEMBERS") || message.author.id === '704355591686062202') {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    if (!message.content.slice(28, message.content.length)) {
		        if (message.author.id === '704355591686062202') {
			     const warnEmbedTwo = new Discord.MessageEmbed()
                            .setColor('#F04947')
                            .setTitle('Warn Completed!')
                            .setThumbnail('https://cdn.discordapp.com/emojis/774026704997056523.gif?size=32')
                            .addFields(
                                { name: 'Moderator:', value: message.author.tag },
                                { name: 'Member:', value: user.tag},
                                { name: 'Reason:', value: 'Not specified.'},
                            )
                            .setTimestamp();
                            message.channel.send(warnEmbedTwo);
                            return member.send(warnEmbedTwo).catch(err =>{
                                message.channel.send("❌ I was unable to DM that person.");
                                console.log(err);
                            });
		        } else if (user == message.author) {
			    return message.channel.send("Can't warn yourself.");
                        } else if (user.id == '744626726222692389') {
                            return message.channel.send('No fair! :angry:');
                        } else if (user.bot) {
                            return message.channel.send('Why would you want to warn a bot?');
			} else if (message.member.roles.highest.rawPosition < member.roles.highest.rawPosition) {
			    return message.channel.send('❌ That user is above you.');
			}
                        const warnEmbedTwo = new Discord.MessageEmbed()
                        .setColor('#F04947')
                        .setTitle('Warn Completed!')
                         .setThumbnail('https://cdn.discordapp.com/emojis/774026704997056523.gif?size=32')
                        .addFields(
                            { name: 'Moderator:', value: message.author.tag },
                            { name: 'Member:', value: user.tag},
                            { name: 'Reason:', value: 'Not specified.'},
                        )
                        .setTimestamp();
                        message.channel.send(warnEmbedTwo);
                        return member.send(warnEmbedTwo).catch(err =>{
                            message.channel.send("❌ I was unable to DM that person.");
                            console.log(err);
                        });
                    }
                    if (message.author.id === '704355591686062202') {
		        const warnEmbed = new Discord.MessageEmbed()
                        .setColor('#F04947')
                        .setTitle('Warn Completed!')
                        .setThumbnail('https://cdn.discordapp.com/emojis/774026704997056523.gif?size=32')
                        .addFields(
                            { name: 'Moderator:', value: message.author.tag },
                            { name: 'Member:', value: user.tag},
                            { name: 'Reason:', value: message.content.slice(28, message.content.length)},
                        )
                        .setTimestamp();
                        message.channel.send(warnEmbed);
                        return member.send(warnEmbed).catch(err =>{
                            message.channel.send("❌ I was unable to DM that person.");
                            console.log(err);
                        });
	            } else if (user == message.author) {
		        return message.channel.send("Can't warn yourself.");
                    } else if (user.bot) {
                        return message.channel.send('Why would you want to warn a bot?');
                    } else if (user.id == '744626726222692389') {
                        return message.channel.send('No fair! :angry:');
		    } else if (message.member.roles.highest.rawPosition < member.roles.highest.rawPosition) {
			return message.channel.send('❌ That user is above you.');
		    }
                    const warnEmbed = new Discord.MessageEmbed()
                    .setColor('#F04947')
                    .setTitle('Warn Completed!')
                    .setThumbnail('https://cdn.discordapp.com/emojis/774026704997056523.gif?size=32')
                    .addFields(
                        { name: 'Moderator:', value: message.author.tag },
                        { name: 'Member:', value: user.tag},
                        { name: 'Reason:', value: message.content.slice(28, message.content.length) },
                    )
                    .setTimestamp();
                    message.channel.send(warnEmbed);
                    member.send(warnEmbed).catch(err =>{
                        message.channel.send("❌ I was unable to DM that person.");
			    console.log(err);
                    });
                } else {
                    message.channel.send("That user is not in the server!");
                }
            } else {
                message.channel.send("Correct Usage: =warn <user> <reason>");
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.')
        }
    }
}
