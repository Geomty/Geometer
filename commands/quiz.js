module.exports = {
    name: 'quiz',
    description: 'Some fun trivia!',
    category: 'fun',
    aliases: ['trivia'],
    execute(message, args, Discord) {
        let num = Math.floor(Math.random()*5);
        if (num === 0) {
            const zeroEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Quiz Time!')
            .setDescription('When was Discord first created? You have 10 seconds to answer.')
            .addFields(
                { name: '1.', value: 'April 9, 2013' },
                { name: '2.', value: 'May 13, 2015' },
                { name: '3.', value: 'September 24, 2016' },
            )
            .setTimestamp();
            message.channel.send(zeroEmbed);
            const filter = m => m.content === '1' && m.author.id === message.author.id;
            const collector = message.channel.createMessageCollector(filter, { time: 10000 });
            collector.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is May 13, 2015.");
                collector.stop();
                collector2.stop();
                collector3.stop();
            });
            const filter2 = m => m.content === '2' && m.author.id === message.author.id;
            const collector2 = message.channel.createMessageCollector(filter2, { time: 10000 });
            collector2.on('collect', m => {
                message.channel.send("Congratulations, that is correct!");
                collector.stop();
                collector2.stop();
                collector3.stop();
            });
            const filter3 = m => m.content === '3' && m.author.id === message.author.id;
            const collector3 = message.channel.createMessageCollector(filter3, { time: 10000 });
            collector3.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is May 13, 2015.");
                collector.stop();
                collector2.stop();
                collector3.stop();
            });
        } else if (num === 1) {
            const oneEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Quiz Time!')
            .setDescription('What is the capital of Canada? You have 10 seconds to answer.')
            .addFields(
                { name: '1.', value: 'Ottawa' },
                { name: '2.', value: 'Toronto' },
                { name: '3.', value: 'Québec City' },
            )
            .setTimestamp();
            message.channel.send(oneEmbed);
            const filter4 = m => m.content === '1' && m.author.id === message.author.id;
            const collector4 = message.channel.createMessageCollector(filter4, { time: 10000 });
            collector4.on('collect', m => {
                message.channel.send("Congratulations, that is correct!");
                collector4.stop();
                collector5.stop();
                collector6.stop();
            });
            const filter5 = m => m.content === '2' && m.author.id === message.author.id;
            const collector5 = message.channel.createMessageCollector(filter5, { time: 10000 });
            collector5.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is Ottawa.");
                collector4.stop();
                collector5.stop();
                collector6.stop();
            });
            const filter6 = m => m.content === '3' && m.author.id === message.author.id;
            const collector6 = message.channel.createMessageCollector(filter6, { time: 10000 });
            collector6.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is Ottawa.");
                collector4.stop();
                collector5.stop();
                collector6.stop();
            });
        } else if (num === 2) {
            const twoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Quiz Time!')
            .setDescription('In what year did the first man land on the moon? You have 10 seconds to answer.')
            .addFields(
                { name: '1.', value: '1976' },
                { name: '2.', value: '1964' },
                { name: '3.', value: '1969' },
            )
            .setTimestamp();
            message.channel.send(twoEmbed);
            const filter7 = m => m.content === '1' && m.author.id === message.author.id;
            const collector7 = message.channel.createMessageCollector(filter7, { time: 10000 });
            collector7.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is 1969.");
                collector7.stop();
                collector8.stop();
                collector9.stop();
            });
            const filter8 = m => m.content === '2' && m.author.id === message.author.id;
            const collector8 = message.channel.createMessageCollector(filter8, { time: 10000 });
            collector8.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is 1969.");
                collector7.stop();
                collector8.stop();
                collector9.stop();
            });
            const filter9 = m => m.content === '3' && m.author.id === message.author.id;
            const collector9 = message.channel.createMessageCollector(filter9, { time: 10000 });
            collector9.on('collect', m => {
                message.channel.send("Congratulations, that is correct!");
                collector7.stop();
                collector8.stop();
                collector9.stop();
            });
        } else if (num === 3) {
            const threeEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Quiz Time!')
            .setDescription('When was the first gaming mouse released? You have 10 seconds to answer.')
            .addFields(
                { name: '1.', value: '1999' },
                { name: '2.', value: '2006' },
                { name: '3.', value: '2004' },
            )
            .setTimestamp();
            message.channel.send(threeEmbed);
            const filter10 = m => m.content === '1' && m.author.id === message.author.id;
            const collector10 = message.channel.createMessageCollector(filter10, { time: 10000 });
            collector10.on('collect', m => {
                message.channel.send("Congratulations, that is correct! The first ever mouse dedicated to gaming was the 1999 Razer Boomslang.");
                collector10.stop();
                collector11.stop();
                collector12.stop();
            });
            const filter11 = m => m.content === '2' && m.author.id === message.author.id;
            const collector11 = message.channel.createMessageCollector(filter11, { time: 10000 });
            collector11.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is 1999.");
                collector10.stop();
                collector11.stop();
                collector12.stop();
            });
            const filter12 = m => m.content === '3' && m.author.id === message.author.id;
            const collector12 = message.channel.createMessageCollector(filter12, { time: 10000 });
            collector12.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is 1999.");
                collector10.stop();
                collector11.stop();
                collector12.stop();
            });
        } else if (num === 4) {
            const fourEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Quiz Time!')
            .setDescription('True or False: Discord Nitro used to only include one boost. You have 10 seconds to answer.')
            .addFields(
                { name: '1.', value: 'True' },
                { name: '2.', value: 'False' },
            )
            .setTimestamp();
            message.channel.send(fourEmbed);
            const filter13 = m => m.content === '1' && m.author.id === message.author.id;
            const collector13 = message.channel.createMessageCollector(filter13, { time: 10000 });
            collector13.on('collect', m => {
                message.channel.send("Congratulations, that is correct!");
                collector13.stop();
                collector14.stop();
            });
            const filter14 = m => m.content === '2' && m.author.id === message.author.id;
            const collector14 = message.channel.createMessageCollector(filter14, { time: 10000 });
            collector14.on('collect', m => {
                message.channel.send("Sorry, but that is not the correct answer. The correct answer is True.");
                collector13.stop();
                collector14.stop();
            });
        }
    }
}
