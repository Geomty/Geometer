module.exports = {
    name: 'dm',
    description: 'Sends a DM to you.',
    category: 'main',
    execute(message) {
        if (message.channel.type === 'dm') {
            message.channel.send("Looks like we're already here...");
        } else {
            message.author.send('I DMed you, just like you wanted!').then(() =>{
                message.react('744697990282739832');
            }).catch(err =>{
                console.log(err);
                if (err == 'DiscordAPIError: Cannot send messages to this user') {
                    message.channel.send("❌ Your DMs are not open.");
                } else {
                    message.channel.send('❌ An unknown error occured.');
                }
            });
        }
    }
}
