module.exports = {
    name: 'evaluate',
    description: 'Evaluate an expression.',
    category: 'dev',
    usage: '<expression>',
    aliases: ['eval'],
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe, Editsnipe, Help, helpEmbeds, auth) {
        if (message.author.id != '704355591686062202') {
            return message.channel.send("I don't think you are the developer.");
        }
        const evalConst = args.join(' ');
        const evalConstTwo = eval(evalConst);
        message.channel.send("```\n" + evalConstTwo + "\n```").catch(err => {
            console.log(err);
            message.channel.send('❌ The output was too large, so I logged it in the console.');
            eval(`console.log(${evalConst})`);
        });
    }
}
