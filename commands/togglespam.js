const fs = require('fs');
module.exports = {
    name: 'togglespam',
    description: 'Turn the spam commands on or off.',
    category: 'mod',
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray) {
        if (message.member.permissions.has("MANAGE_GUILD") || message.author.id === '704355591686062202') {
            if (togglespamArray[0].indexOf(message.guild.id) === -1) {
                togglespamArray[0].push(message.guild.id);
                message.channel.send('Spam commands on this server have been toggled **off.**');
                fs.writeFileSync('./arrays/togglespamArray.txt', togglespamArray);
                console.log(togglespamArray);
            } else {
                togglespamArray[0].splice(togglespamArray[0].indexOf(message.guild.id), 1);
                message.channel.send('Spam commands on this server have been toggled **on.**');
                fs.writeFileSync('./arrays/togglespamArray.txt', togglespamArray);
                console.log(togglespamArray);
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.')
        }
    }
}
