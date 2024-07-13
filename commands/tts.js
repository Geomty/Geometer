module.exports = {
    name: 'tts',
    description: 'Make the bot say tts messages of your choice!',
    usage: '<message>',
    category: 'mod',
    guildOnly: true,
    execute(message) {
        if (message.member.permissions.has("MANAGE_MESSAGES", "SEND_TTS_MESSAGES") || message.author.id === '704355591686062202') {
            const ttsConst = message.content.slice(4, message.content.length);
            if (ttsConst) {
                message.delete().catch(err =>{
                    message.channel.send('Hey... give me the `MANAGE_MESSAGES` and `SEND_TTS_MESSAGES` permissions!');
                });
                message.channel.send(message.content.slice(4, message.content.length), {
                    tts: true
                });
            } else {
                message.channel.send('Correct Usage: =tts <message>');
            }
        } else {
            message.channel.send("What do you think you're doing?");
        }
    }
}
