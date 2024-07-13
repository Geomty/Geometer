module.exports = {
    name: 'urbansearch',
    description: 'Search for words on Urban Dictionary.',
    usage: '<text>',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch) {
        async function asyncFunction() {
            const urbansearchConst = args[0];
            const query = querystring.stringify({term: args.join(' ')});
            const urbansearchReq = await fetch(`https://api.urbandictionary.com/v0/define?${query}`);
            const urbansearchData = await urbansearchReq.json();
            if (urbansearchConst) {
                const urbansearchEmbed2 = new Discord.MessageEmbed()
                .setColor('#F04947')
                .setTitle('WARNING!!!')
                .setDescription('Urban Dictionary is not a reliable source for defining words and not all definitions will be accurate. Are you sure you want to continue? Please type "yes" or "no" in the next 10 seconds.')
                .setTimestamp();
                message.channel.send(urbansearchEmbed2);
                const filter = m => m.content === 'yes' && m.author.id === message.author.id;
                const collector = message.channel.createMessageCollector(filter, { time: 10000 });
                collector.on('collect', m => {
                    collector.stop();
                    collector2.stop();
                    if (!urbansearchData.list.length) {
                        message.channel.send(`No results found for ${args.join(' ')}.`)
                    } else {
                        const urbansearchEmbed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('Urban Dictionary')
                        .setTitle(urbansearchData.list[0].word)
                        .setURL(urbansearchData.list[0].permalink)
                        .setDescription(urbansearchData.list[0].definition)
                        .addFields(
                            { name: 'Example:', value: urbansearchData.list[0].example },
                            { name: 'Likes:', value: urbansearchData.list[0].thumbs_up },
                            { name: 'Dislikes:', value: urbansearchData.list[0].thumbs_down },
                        )
                        .setFooter(`Written on ${urbansearchData.list[0].written_on.slice(0, 10)}`);
                        message.channel.send(urbansearchEmbed)
                    }
                });
                const filter2 = m => m.content === 'no' && m.author.id === message.author.id;
                const collector2 = message.channel.createMessageCollector(filter2, { time: 10000 });
                collector2.on('collect', m => {
                    collector.stop();
                    collector2.stop();
                    message.channel.send("Ok, not today.");
                });
            } else {
                message.channel.send('Correct Usage: =urbansearch <text>');
            }
        }
        asyncFunction();
    }
}
