const helpEmbeds = require('../utils/embeds.js');
module.exports = {
    name: 'help',
    description: 'Brings up the Geometer Menu.',
    category: 'main',
    usage: '<command (optional)>',
    aliases: ['h', ''],
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe, Editsnipe, Help, helpEmbeds) {
        if (args[0]) {
            const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(args[0]));
            if (!command) {
                return message.channel.send("❌ That command doesn't exist.");
            }
            const category = command.category[0].toUpperCase() + command.category.slice(1);
            const aliases = command.aliases;
            if (command.guildOnly) {
                if (aliases) {
                    const helpEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Command: =${command.name}`)
                    .setDescription('Here is all the information I could find on that command.')
                    .addFields(
                        { name: 'Description:', value: command.description },
                        { name: 'Category:', value: category },
                        { name: 'Usage:', value: `=${command.name} ${command.usage || ''}` },
                        { name: 'Aliases:', value: `=${aliases.join(', =')}` },
                        { name: 'Server Only?', value: 'Yes' }
                    )
                    .setTimestamp();
                    return message.channel.send(helpEmbed);
                } else {
                    const helpEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Command: =${command.name}`)
                    .setDescription('Here is all the information I could find on that command.')
                    .addFields(
                        { name: 'Description:', value: command.description },
                        { name: 'Category:', value: category },
                        { name: 'Usage:', value: `=${command.name} ${command.usage || ''}` },
                        { name: 'Aliases:', value: `None` },
                        { name: 'Server Only?', value: 'Yes' }
                    )
                    .setTimestamp();
                    return message.channel.send(helpEmbed);
                }
            } else {
                if (aliases) {
                    const helpEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Command: =${command.name}`)
                    .setDescription('Here is all the information I could find on that command.')
                    .addFields(
                        { name: 'Description:', value: command.description },
                        { name: 'Category:', value: category },
                        { name: 'Usage:', value: `=${command.name} ${command.usage || ''}` },
                        { name: 'Alias:', value: `=${aliases.join(', =')}` },
                        { name: 'Server Only?', value: 'No' }
                    )
                    .setTimestamp();
                    return message.channel.send(helpEmbed);
                } else {
                    const helpEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Command: =${command.name}`)
                    .setDescription('Here is all the information I could find on that command.')
                    .addFields(
                        { name: 'Description:', value: command.description },
                        { name: 'Category:', value: category },
                        { name: 'Usage:', value: `=${command.name} ${command.usage || ''}` },
                        { name: 'Aliases:', value: `None` },
                        { name: 'Server Only?', value: 'No' }
                    )
                    .setTimestamp();
                    return message.channel.send(helpEmbed);
                }
            }
        }
        let helpEmbedsArray = [helpEmbeds.zero, helpEmbeds.one, helpEmbeds.two, helpEmbeds.three, helpEmbeds.four, helpEmbeds.five, helpEmbeds.six];
        const helpEmbed = helpEmbeds.zero();
        message.channel.send(helpEmbed).then(m => {
            m.react('⏪').catch(err =>{
                console.log(err);
                message.channel.send('I need the `"ADD_REACTIONS"` permission for the menu to function properly.');
            })
            .then(m.react('⬅')).catch(err =>{
                console.log(err);
                message.channel.send('I need the `"ADD_REACTIONS"` permission for the menu to function properly.');
            })
            .then(m.react('➡')).catch(err =>{
                console.log(err);
                message.channel.send('I need the `"ADD_REACTIONS"` permission for the menu to function properly.');
            })
            .then(m.react('⏩')).catch(err =>{
                console.log(err);
                message.channel.send('I need the `"ADD_REACTIONS"` permission for the menu to function properly.');
            });
            let page = 0;
            const filter = (reaction, user) => user.id === message.author.id;
            const collector = m.createReactionCollector(filter);
            collector.on('collect', reaction => {
                reaction.users.remove(message.author.id);
                switch (reaction.emoji.name) {
                    case '⏪':
                        page = 0;
                        break;
                    case '⬅':
                        page = (page != 0) ? page-=1 : page;
                        break;
                    case '➡':
                        page = (page != helpEmbedsArray.length - 1) ? page+=1 : page;
                        break;
                    case '⏩':
                        page = helpEmbedsArray.length-1;
                        break;
                }
                const helpEmbed = helpEmbedsArray[page]();
                m.edit(helpEmbed);
            });
        });
    }
}
