const leaderboardArray = [];
module.exports = {
    name: 'leaderboard',
    description: 'Check who has the most amount of cubits.',
    category: 'economy',
    usage: '<number (optional)>',
    aliases: ['lb'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
        for (i=2;i<balanceArray[0].length-1;i+=2) {
            leaderboardArray.push(balanceArray[0][i]);
        }
        leaderboardArray.sort((a,b)=>b-a);
        if (args[0]) {
            if (isNaN(args[0])) {
                return message.channel.send('❌ Please provide a number.');
            } else if (args[0] >= leaderboardArray.length) {
                return message.channel.send('❌ That number is too high.');
            } else {
                let leaderboardMessage = `1. ${client.users.cache.get(balanceArray[0][balanceArray[0].indexOf(leaderboardArray[0]) - 1]).tag} with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[0])]} cubits\n`;
                for (g=2;g<=args[0];g++) {
                    try {
                        leaderboardMessage += `${g}. ${client.users.cache.get(balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1]) - 1]).tag} with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1])]} cubits\n`
                    } catch (err) {
                        leaderboardMessage += `${g}. Unknown User with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1])]} cubits\n`
                    }
                }
                const leaderboardEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
                .setTitle('Cubits Leaderboard')
                .setDescription(leaderboardMessage)
                .setTimestamp();
                message.channel.send(leaderboardEmbed).catch(err => {
                    console.log(err);
                    message.channel.send('❌ That number is too high.');
                });
                leaderboardArray.splice(0, 100);
            }
        } else {
            let leaderboardMessage = `1. ${client.users.cache.get(balanceArray[0][balanceArray[0].indexOf(leaderboardArray[0]) - 1]).tag} with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[0])]} cubits\n`;
            if (leaderboardArray.length <= 5) {
                for (g=2;g<(leaderboardArray.length-1);g++) {
                    try {
                        leaderboardMessage += `${g}. ${client.users.cache.get(balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1]) - 1]).tag} with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1])]} cubits\n`
                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                for (g=2;g<6;g++) {
                    try {
                        leaderboardMessage += `${g}. ${client.users.cache.get(balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1]) - 1]).tag} with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1])]} cubits\n`
                    } catch (err) {
                        leaderboardMessage += `${g}. Unknown User with ${balanceArray[0][balanceArray[0].indexOf(leaderboardArray[g - 1])]} cubits\n`
                    }
                }
            }
            const leaderboardEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, 'https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.webp')
            .setTitle('Cubits Leaderboard')
            .setDescription(leaderboardMessage)
            .setTimestamp();
            message.channel.send(leaderboardEmbed);
            leaderboardArray.splice(0, 100);
        }
    }
}
