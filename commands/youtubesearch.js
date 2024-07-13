module.exports = {
    name: 'youtubesearch',
    description: 'Search for something on YouTube.',
    usage: '<text>',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe, Editsnipe, Help, helpEmbeds, auth) {
        async function asyncFunction() {
            const youtubesearchConst = message.content.slice(15, message.content.length);
            const query = querystring.stringify({ q: args.join(' ') });
            const youtubesearchReq = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${auth.youtubekey}&${query}`);
            const youtubesearchData = await youtubesearchReq.json();
            if (youtubesearchConst) {
                if (!youtubesearchData.items.length) {
                    message.channel.send(`No results found for ${message.content.slice(15, message.content.length)}.`)
                } else if (youtubesearchData.items[0].id.kind == 'youtube#video') {
                    message.channel.send(`https://youtu.be/${youtubesearchData.items[0].id.videoId}`);
                } else if (youtubesearchData.items[0].id.kind == 'youtube#channel') {
                    message.channel.send(`https://www.youtube.com/channel/${youtubesearchData.items[0].id.channelId}`);
                } else if (youtubesearchData.items[0].id.kind == 'youtube#playlist') {
                    message.channel.send(`https://www.youtube.com/playlist?list=${youtubesearchData.items[0].id.playlistId}`);
                }
            } else {
                message.channel.send('Correct Usage: =youtubesearch <text>');
            }
        }
        asyncFunction();
    }
}
