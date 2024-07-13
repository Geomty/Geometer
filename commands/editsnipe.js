module.exports = {
    name: 'editsnipe',
    description: 'Use this when someone edits their message.',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe, Editsnipe) {
        if (togglesnipeArray[0].indexOf(message.guild.id) != -1) {
            message.channel.send('❌ Whoops, snipe commands have been disabled on this server. Contact a server admin if you think this is a mistake.');
        } else {
            async function asyncFunction() {
                const editsnipeFind = await Editsnipe.findOne({ where: { channel: message.channel.id } });
                if (editsnipeFind) {
		            const date = new Date(Date.parse(editsnipeFind.get('date')));
                    const editsnipeEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor(editsnipeFind.get('author'), editsnipeFind.get('pfp'))
                    .setTitle('What was the edited message???')
                    .setDescription(editsnipeFind.get('message'))
                    .setFooter(`Message edited at ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`)
                    message.channel.send(editsnipeEmbed);
                } else {
                    message.channel.send('No edited messages detected within the past 10 minutes.')
                }
            }
            asyncFunction();
        }
    }
}
