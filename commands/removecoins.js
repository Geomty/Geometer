const fs = require('fs');
module.exports = {
    name: 'removecoins',
    description: 'Remove a user\'s coins.',
    usage: '<user>',
    category: 'dev',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
	    if (message.author.id != '704355591686062202') {
	        return message.channel.send("I don't think you are the developer.");
	    }
	    if (balanceArray[0].indexOf(args[0]) === -1) {
	        message.channel.send('That user already has 0 cubits.');
	    } else {
	        if (args[1] === 'all') {
		    	async function asyncFunction() {
					await balanceArray[0].splice(balanceArray[0].indexOf(args[0]) + 1, 1);
		    		await balanceArray[0].splice(balanceArray[0].indexOf(args[0]), 1);
            		message.channel.send("User ID `" + args[0] + "`'s data has been removed.");
            		fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
					return console.log(balanceArray);
				}
				asyncFunction();
			}
			balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(args[0]) + 1]) - args[1];
			balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] = String(balanceArray[0][balanceArray[0].indexOf(args[0]) + 1]);
            message.channel.send("User ID `" + args[0] + "` now has " + balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] + " cubits.");
            fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
	    }
    }
}
