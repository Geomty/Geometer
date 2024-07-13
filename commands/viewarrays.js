module.exports = {
    name: 'viewarrays',
    description: 'Some commands use something called arrays. This command checks the arrays to make sure they are functioning properly.',
    category: 'dev',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, Snipe, Editsnipe, auth, applyArray) {
        if (message.author.id === '704355591686062202') {
            message.channel.send("`togglespamArray:` `" + togglespamArray + "`\n`togglesnipeArray:` `" + togglesnipeArray + "`\n`banuserArray:` `" + banuserArray + "`\n`verifyArray:` `" + verifyArray + "`\n`balanceArray:` `" + balanceArray + "`");
        } else {
            message.channel.send("I don't think you are the developer.")
        }
    }
}
