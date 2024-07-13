module.exports = {
    name: 'spamdm',
    description: 'Spam DM someone!',
    usage: '<user>',
    category: 'spam',
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray) {
        const user = message.mentions.users.first();
        if (togglespamArray[0].indexOf(message.guild.id) != -1) {
            message.channel.send('❌ Spam commands on this server have been disabled. Contact a server admin if you think this is a mistake.');
        } else {
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    if (message.content.slice(8, message.content.length) === '<@!704355591686062202>') {
                        return message.channel.send('Hey! Stop trying to make me abuse my creator!');
		            } else if (message.content.slice(8, message.content.length) === '<@!744626726222692389>') {
			            return message.channel.send('Hey! Stop trying to make me abuse myself!');
                    } else {
			            message.channel.send("I'm on it!");
                        for (g = 0; g < 100; g++) {
                            member.send(`<@!${user.id}> HAHA GET SPAM DMED`).catch(err =>{
                                return console.log(err);
                            });
                        }
                    }
                } else {
                    message.channel.send("That user is not in the server!");
                }
            } else {
                message.channel.send('Correct Usage: =spamdm <user>');
            }
        }
    }
}
