module.exports = {
    name: 'flood',
    description: 'Floods the chat!',
    category: 'spam',
    aliases: ['spam'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray) {
        if (togglespamArray[0].indexOf(message.guild.id) != -1) {
            message.channel.send('❌ Spam commands on this server have been disabled. Contact a server admin if you think this is a mistake.');
        } else {
            for (g = 0; g < 100; g++) {
                message.channel.send('LOL IM FLOODING THE CHAT');
            }
            message.channel.send("Phew, I'm finished!");
        }
    }
}
