module.exports = {
    name: 'coin',
    description: 'Flip a coin.',
    category: 'fun',
    aliases: ['coinflip', 'flip'],
    execute(message, args, Discord) {
        let num = Math.floor(Math.random()*2);
        if (num === 0) {
            message.channel.send('You flick your finger...').then(m =>{
                setTimeout(function() {
                    const headsEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Coin Flip Results!')
                    .setDescription(`<@!${message.author.id}>, you got heads!`)
                    .setTimestamp();
                    m.edit(headsEmbed);
                }, 3000);
            });
        } else if (num === 1) {
            message.channel.send('You flick your finger...').then(m =>{
                setTimeout(function() {
                    const tailsEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Coin Flip Results!')
                    .setDescription(`<@!${message.author.id}>, you got tails!`)
                    .setTimestamp();
                    m.edit(tailsEmbed);
                }, 3000);
            });
        }
    }
}
