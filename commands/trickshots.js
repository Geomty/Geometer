const { MessageAttachment } = require("discord.js");
module.exports = {
    name: 'trickshots',
    description: 'Shows impressive trickshots.',
    category: 'fun',
    execute(message) {
        const attachment = new MessageAttachment('https://media1.tenor.com/images/a6fed89a5b7704fc4436e7504e72a471/tenor.gif');
        message.channel.send('GET RICKROLLED!!!', attachment);
    }
}
