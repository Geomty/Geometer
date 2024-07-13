module.exports = {
    name: 'purge',
    description: 'Delete messages in bulk.',
    category: 'mod',
    usage: '<number>',
    aliases: ['clear', 'delete', 'prune'],
    guildOnly: true,
    execute(message, args) {
        if (message.member.permissions.has("MANAGE_MESSAGES") || message.author.id === '704355591686062202') {
            if (args[0]) {
                if (parseInt(args[0])) {
                    message.channel.bulkDelete(args[0]).then(() => {
                        message.channel.send(`Deleted ${args[0]} messages.`).then(m =>{
                            setTimeout(function() {
                                m.delete();
                            }, 3000);
                        });
                    }).catch(err =>{
                        console.log(err);
                        if (err == 'DiscordAPIError: Missing Access') {
                            message.channel.send('❌ I do not have enough permissions.');
                        } else if (err == 'DiscordAPIError: You can only bulk delete messages that are under 14 days old.') {
                            message.channel.send('❌ I can only purge messages under 14 days old.');
                        } else {
                            message.channel.send('❌ An unknown error occured.');
                        }
                    });
                } else {
                    message.channel.send('❌ You must enter a number.');
                }
            } else {
                message.channel.send('Correct Usage: =purge <number>')
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.');
        }
    }
}
