const fs = require('fs');
module.exports = {
    name: 'reload',
    description: 'Reloads the bot.',
    category: 'dev',
    aliases: ['restart'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray) {
        if (message.author.id === '704355591686062202') {
            message.channel.send('Commands reloaded!');
            fs.writeFileSync('./arrays/togglespamArray.txt', togglespamArray);
            fs.writeFileSync('./arrays/togglesnipeArray.txt', togglesnipeArray);
            fs.writeFileSync('./arrays/banuserArray.txt', banuserArray);
            fs.writeFileSync('./arrays/verifyArray.txt', verifyArray);
            setTimeout(function() {
                process.exit();
            }, 1000);
        } else {
            message.channel.send("I don't think you are the developer.")
        }
    }
}
