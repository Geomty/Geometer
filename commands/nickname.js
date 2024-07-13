module.exports = {
    name: 'nickname',
    description: 'Nickname a user.',
    category: 'mod',
    usage: '<user> <nickname> OR =nickname <nickname> <user>',
    aliases: ['nick'],
    guildOnly: true,
    execute(message, args) {
        if (message.member.permissions.has("MANAGE_NICKNAMES") || message.author.id === '704355591686062202') {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
		            if (!args[1]) {
			            member.setNickname(user.username).then(() =>{
			                message.channel.send(`Successfully reset <@!${user.id}>'s nickname!`);
			            }).catch(err =>{
                            console.log(err);
                            if (err == 'DiscordAPIError: Missing Permissions') {
                                message.channel.send('❌ I do not have enough permissions.');
                            } else {
                                message.channel.send('❌ An unknown error occured.');
                            }
                        });
		            } else {
                        const nicknameArray = [];
                        for (const arg of args) {
                            if (arg != `<@!${user.id}>`) {
                                nicknameArray.push(arg);
                            }
                        }
                        member.setNickname(nicknameArray.join(' ')).then(() =>{
                            message.channel.send(`Succesfully changed <@!${user.id}>'s nickname to ${nicknameArray.join(' ')}!`);
                        }).catch(err =>{
                            console.log(err);
                            if (err == 'DiscordAPIError: Missing Permissions') {
                                message.channel.send('❌ I do not have enough permissions.');
                            } else {
                                message.channel.send('❌ An unknown error occured. Please keep in mind that nicknames must be 32 or less characters long.');
                            }
                        });
		            }
                } else {
                    message.channel.send("That user is not in the server!");
                }
            } else {
                message.channel.send("Correct Usage: =nickname <user> <nickname>");
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.');
        }
    }
}
