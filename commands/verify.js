module.exports = {
    name: 'verify',
    description: 'Verify yourself.',
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray) {
        if (message.member.roles.cache.has(verifyArray[0][verifyArray[0].indexOf(message.guild.id) + 1])) {
            message.channel.send('You are already verified.');
        } else {
            message.member.roles.add(verifyArray[0][verifyArray[0].indexOf(message.guild.id) + 1]).catch(err =>{
                console.log(err)
                if (err == 'DiscordAPIError: Missing Permissions') {
                    return message.channel.send("❌ I do not have enough permissions.")
                } else if (err == 'TypeError [INVALID_TYPE]: Supplied roles is not a Role, Snowflake or Array or Collection of Roles or Snowflakes.') {
                    return message.channel.send('This server is not yet set to have a verification system! Ask an admin about =verifyset.');
                } else {
                    return message.channel.send('❌ An unknown error occured.');
                }
            });
        }
    }
}