module.exports = {
    name: 'gifsearch',
    description: 'Search for gifs on Tenor.',
    usage: '<text>',
    category: 'fun',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe, Editsnipe, Help, helpEmbeds, auth) {
        async function asyncFunction() {
            const gifsearchConst = args.join(' ');
            const query = querystring.stringify({q: args.join(' ')});
            const gifsearchReq = await fetch(`https://api.tenor.com/v1/search?key=${auth.tenorkey}&${query}`);
            const gifsearchData = await gifsearchReq.json();
            if (gifsearchConst) {
                if (!gifsearchData.results.length) {
                    message.channel.send(`No results found for ${message.content.slice(13, message.content.length)}.`)
                } else {
                    message.channel.send(gifsearchData.results[0].url);
                }
            } else {
                message.channel.send('Correct Usage: =gifsearch <text>');
            }
        }
        asyncFunction();
    }
}
