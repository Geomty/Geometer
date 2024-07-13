module.exports = {
    name: 'removemod',
    description: 'Removes the mod role from a user.',
    category: 'mod',
    usage: '<user>',
    aliases: ['rm'],
    guildOnly: true,
    execute(message) {
        if (message.member.permissions.has("MANAGE_ROLES") || message.author.id === '704355591686062202') {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    const acceptedRoles = ["Mod", "Moderator", "Mods", "Moderators"];
                    const modRole = message.guild.roles.cache.find(role => acceptedRoles.includes(role.name));
                    member.roles.remove(modRole).then(() =>{
                        message.channel.send('Role removed!')
                    }).catch(err =>{
                        console.log(err)
                        if (err == 'DiscordAPIError: Missing Access') {
                            message.channel.send("❌ I do not have enough permissions.")
                        } else if (err == 'TypeError [INVALID_TYPE]: Supplied roles is not a Role, Snowflake or Array or Collection of Roles or Snowflakes.') {
                            message.channel.send("❌ I couldn't find a role named Mod, Moderator, Mods or Moderators.")
                        } else {
                            message.channel.send('❌ An unknown error occured.');
                        }
                    })
                } else {
                    message.channel.send("That user is not in the server!");
                }
            } else {
                message.channel.send("Correct Usage: =removemod <user>");
            }
        } else {
            message.channel.send('You do not have sufficient permissions to perform this command.');
        }
    }
}
