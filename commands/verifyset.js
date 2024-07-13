const fs = require('fs');
module.exports = {
    name: 'verifyset',
    description: 'Specify the role to be added to a user when they do =verify.',
    category: 'mod',
    usage: '<role>',
    aliases: ['vs'],
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray) {
        async function asyncFunction() {
            if (message.member.permissions.has("MANAGE_GUILD") || message.author.id === '704355591686062202') {
                if (!args[0]) {
                    return message.channel.send('Correct Usage: =verifyset <role>');
                }
                if (verifyArray[0].indexOf(message.guild.id) === -1) {
                    const verifyArraySubstringed = message.mentions.roles.first().id;
                    await verifyArray[0].push(message.guild.id);
                    await verifyArray[0].push(verifyArraySubstringed);
                    await message.channel.send('The role <@&' + verifyArraySubstringed + '> will be used to verify other users. If you did not provide a proper role nothing will happen.');
                    fs.writeFileSync('./arrays/verifyArray.txt', verifyArray);
                    console.log(verifyArray);
                } else {
                    const verifyArraySubstringed = message.mentions.roles.first().id;
                    await verifyArray[0].splice(verifyArray.indexOf(message.guild.id + 1));
                    await verifyArray[0].splice(verifyArray.indexOf(message.guild.id));
                    await verifyArray[0].push(message.guild.id);
                    await verifyArray[0].push(verifyArraySubstringed);
                    await message.channel.send('The role <@&' + verifyArraySubstringed + '> will be used to verify other users. If you did not provide a proper role nothing will happen.');
                    fs.writeFileSync('./arrays/verifyArray.txt', verifyArray);
                    console.log(verifyArray);
                }
            } else {
                message.channel.send('You do not have sufficient permissions to perform this command.');
            }
        }
        asyncFunction();
    }
}
