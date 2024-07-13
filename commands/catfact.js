module.exports = {
    name: 'catfact',
    description: 'Sends you a random cat fact.',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch) {
        async function asyncFunction() {
            const catfactReq = await fetch("https://some-random-api.ml/facts/cat");
            const catfactData = await catfactReq.json();
            const catfactEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Here's a random cat fact for you!")
            .setDescription(catfactData['fact'])
            .setFooter('Powered by https://some-random-api.ml');
            await message.channel.send(catfactEmbed);
        }
        asyncFunction();
    }
}
