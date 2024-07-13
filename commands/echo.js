module.exports = {
    name: 'echo',
    description: 'Make the bot say what you want!',
    category: 'mod',
    usage: '<message>',
    aliases: ['say'],
    guildOnly: true,
    execute(message, args) {
        if (message.member.permissions.has("MANAGE_MESSAGES") || message.author.id === '704355591686062202') {
            if (args[0]) {
                message.delete().catch(err =>{
                    message.channel.send('Hey... give me the `MANAGE_MESSAGES` permission!');
                });
                message.channel.send(args.join(' '));
            } else {
                message.channel.send('Correct Usage: =echo <message>');
            }
        } else {
            message.channel.send("What do you think you're doing?");
        }
    }
}
