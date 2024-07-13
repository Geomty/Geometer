module.exports = {
    name: 'ping',
    description: 'Pings the bot and checks if it is online.',
    category: 'main',
    aliases: ['pong'],
    execute(message, args, Discord, client) {
        message.channel.send('Pinging...').then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            const pingEmbed = new Discord.MessageEmbed()
            .setColor('#FFAEC8')
            .setTitle('Pong! :ping_pong:')
            .setDescription(`Bot Latency: ${ping}ms
API Latency: ${client.ws.ping}ms`)
            .setFooter(`Requested by ${message.author.tag}`);
            m.edit(pingEmbed);
            m.edit('');
        });
    }
}
