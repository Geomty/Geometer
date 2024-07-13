module.exports = {
    name: 'chatbot',
    description: 'Talk to a chatbot.',
    usage: '<message>',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch) {
        if (!args[0]) {
            return message.channel.send('Correct Usage: =chatbot <message>');
        }
        message.channel.send('Waiting for a response...').then(async m =>{
            const query = querystring.stringify({ message: args.join(' ') });
            const chatbotReq = await fetch(`https://some-random-api.ml/chatbot?${query}`);
            const chatbotData = await chatbotReq.json();
            const chatbotEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Chatbot's Response:")
            .setDescription(chatbotData['response'])
            .setFooter('Powered by https://some-random-api.ml');
            await m.edit(chatbotEmbed);
        });
    }
}
