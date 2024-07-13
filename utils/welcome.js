module.exports = (createdGuild, client) => {
    client.user.setActivity('=help | ' + client.guilds.cache.size + ' Servers', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=qwyshfGJLp4' });
    const channelOne = createdGuild.channels.cache.find(ch=>ch.name.includes('general'));
    const channelTwo = createdGuild.channels.cache.find(ch=>ch.name.includes('chat'));
    const channelThree = createdGuild.channels.cache.find(ch=>ch.name.includes('bot'));
    const channelFour = createdGuild.channels.cache.find(ch=>ch.name.includes('bots'));

    const createdGuildEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Welcome!')
    .setDescription("Hi! Thank you for choosing me! The Geometer developer team is so happy you're here! To get started, check out everything you can do with =help. It is also recommended you visit the Geometer website and the Geometer YouTube channel which can be found in the =info command.")
    .setTimestamp();

    if (channelOne) {
        channelOne.send(createdGuildEmbed).catch(err =>{
            createdGuild.owner.send('I was supposed to send the embed below in your server, but I did not have the permissions!').catch(() => {return});
            return createdGuild.owner.send(createdGuildEmbed).catch(() => {return});
        });
    } else if (channelTwo) {
        channelTwo.send(createdGuildEmbed).catch(err =>{
            createdGuild.owner.send('I was supposed to send the embed below in your server, but I did not have the permissions!').catch(() => {return});
            return createdGuild.owner.send(createdGuildEmbed).catch(() => {return});
        });
    } else if (channelThree) {
        channelThree.send(createdGuildEmbed).catch(err =>{
            createdGuild.owner.send('I was supposed to send the embed below in your server, but I did not have the permissions!').catch(() => {return});
            return createdGuild.owner.send(createdGuildEmbed).catch(() => {return});
        });
    } else if (channelFour) {
        channelFour.send(createdGuildEmbed).catch(err =>{
            createdGuild.owner.send('I was supposed to send the embed below in your server, but I did not have the permissions!').catch(() => {return});
            return createdGuild.owner.send(createdGuildEmbed).catch(() => {return});
        });
    } else {
        createdGuild.owner.send('I was supposed to send the embed below in your server, but I did not detect any channels!').catch(() => {return});
        createdGuild.owner.send(createdGuildEmbed).catch(() => {return});
    }
}
