module.exports = {
    name: 'snipe',
    description: 'Use this when someone deletes their message.',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe) {
        if (togglesnipeArray[0].indexOf(message.guild.id) != -1) {
            message.channel.send('❌ Whoops, snipe commands have been disabled on this server. Contact a server admin if you think this is a mistake.');
        } else {
            async function asyncFunction() {
                const snipeFind = await Snipe.findOne({ where: { channel: message.channel.id } });
                if (snipeFind) {
                    const date = new Date(Date.parse(snipeFind.get('date')));
                    const snipeEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(snipeFind.get('author'), snipeFind.get('pfp'))
                    .setTitle('What was the deleted message???')
                    .setDescription(snipeFind.get('message'))
                    .setFooter(`Message deleted at ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`)
                    message.channel.send(snipeEmbed);
                } else {
                    message.channel.send('No deleted messages detected within the past 10 minutes.')
                }
            }
            asyncFunction();
        }
    }
}
