const mojangjs = require('mojangjs');
let namehistoryArray = [];
module.exports = {
    name: 'namehistory',
    description: 'Check the name history of a Minecraft username.',
    category: 'fun',
    usage: '<minecraft username>',
    aliases: ['nh'],
    execute(message, args, Discord) {
        const namehistoryConst = args.join(' ');
        if (namehistoryConst) {
            if (args[0].toLowerCase() === 'geomty') {
                return message.channel.send('The developer has decided he does not want other people viewing his name history.');
            }
            mojangjs.nameHistory.byName(args.join(' ')).then(nameHistory => {
                let namehistoryMessage = "Name: `" + nameHistory[0].name + "`";
                for (g=1;g<nameHistory.length;g++) {
                    const date = new Date(nameHistory[g].changedToAt);
                    namehistoryArray.push(date);
                }
                for (i=1;i<nameHistory.length;i++) {
                    namehistoryMessage += "\n\nName: `" + nameHistory[i].name + "`; Changed At: `" + namehistoryArray[i-1] + "`";
                }
                const namehistoryEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(namehistoryConst + "'s Minecraft Username History")
                .setDescription(namehistoryMessage)
                .setFooter(`Requested by ${message.author.tag}`);
                message.channel.send(namehistoryEmbed).catch(err =>{
                    console.log(err);
                    message.channel.send('❌ I have reached the maximum charcter limit.');
                });
                namehistoryArray.splice(0, 100);
            }).catch(err => {
                console.log(err);
                message.channel.send(`No results found for ${namehistoryConst}`);
            });
        } else {
            message.channel.send('Correct Usage: =namehistory <minecraft username>');
        }
    }
}
