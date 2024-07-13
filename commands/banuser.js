const fs = require('fs');
module.exports = {
    name: 'banuser',
    description: 'Ban a user from using the bot.',
    usage: '<user>',
    category: 'dev',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray) {
        if (message.author.id === '704355591686062202') {
            if (banuserArray[0].indexOf(message.content.slice(9, message.content.length)) === -1) {
                banuserArray[0].push(message.content.slice(9, message.content.length));
                message.channel.send("User ID `" + message.content.slice(9, message.content.length) + "` has been banned from using the bot.");
                fs.writeFileSync('./arrays/banuserArray.txt', banuserArray);
                console.log(banuserArray);
            } else {
                banuserArray[0].splice(banuserArray.indexOf(message.content.slice(9, message.content.length)), 1);
                message.channel.send("User ID `" + message.content.slice(9, message.content.length) + "` has been unbanned from using the bot.");
                fs.writeFileSync('./arrays/banuserArray.txt', banuserArray);
                console.log(banuserArray);
            }
        } else {
            message.channel.send("I don't think you are the developer.")
        }
    }
}
