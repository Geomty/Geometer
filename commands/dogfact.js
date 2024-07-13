module.exports = {
    name: 'dogfact',
    description: 'Sends you a random dog fact.',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch) {
        async function asyncFunction() {
            const dogfactReq = await fetch("https://some-random-api.ml/facts/dog");
            const dogfactData = await dogfactReq.json();
            const dogfactEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Here's a random dog fact for you!")
            .setDescription(dogfactData['fact'])
            .setFooter('Powered by https://some-random-api.ml');
            await message.channel.send(dogfactEmbed);
        }
        asyncFunction();
    }
}
