const fs = require('fs');
module.exports = {
    name: 'togglesnipe',
    description: 'Turn the snipe command on or off.',
    category: 'mod',
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray) {
        if (message.member.permissions.has("MANAGE_GUILD") || message.author.id === '704355591686062202') {
            if (togglesnipeArray[0].indexOf(message.guild.id) === -1) {
                togglesnipeArray[0].push(message.guild.id);
                message.channel.send('Snipe commands on this server has been toggled **off.**');
                fs.writeFileSync('./arrays/togglesnipeArray.txt', togglesnipeArray);
                console.log(togglesnipeArray);
            } else {
                togglesnipeArray[0].splice(togglesnipeArray.indexOf(message.guild.id), 1);
                message.channel.send('Snipe commands on this server has been toggled **on.**');
                fs.writeFileSync('./arrays/togglesnipeArray.txt', togglesnipeArray);
                console.log(togglesnipeArray);
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.')
        }
    }
}
