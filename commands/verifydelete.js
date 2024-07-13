const fs = require('fs');
module.exports = {
    name: 'verifydelete',
    description: 'Delete the verification system.',
    category: 'mod',
    aliases: ['vd'],
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray) {
        async function asyncFunction() {
            if (message.member.permissions.has("MANAGE_GUILD") || message.author.id === '704355591686062202') {
                if (verifyArray[0].indexOf(message.guild.id) != -1) {
                    await verifyArray[0].splice(verifyArray.indexOf(message.guild.id + 1));
                    await verifyArray[0].splice(verifyArray.indexOf(message.guild.id));
                    await message.channel.send('The verification system has been deleted.');
                    fs.writeFileSync('./arrays/verifyArray.txt', verifyArray);
                    console.log(verifyArray);
                } else {
                    message.channel.send('This server does not yet have a verification system!');
                }
            } else {
                message.channel.send('You do not have sufficient permissions to perform this command.');
            }
        }
        asyncFunction();
    }
}
