const fs = require('fs');
module.exports = {
    name: 'addcoins',
    description: 'Add an infinite amount of cubits to a user.',
    usage: '<user> <number>',
    category: 'economy',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray) {
	    if (message.author.id != '704355591686062202') {
	        return message.channel.send("I don't think you are the developer.");
	    }
	    if (balanceArray[0].indexOf(args[0]) === -1) {
	        async function asyncFunction() {
	    	    await balanceArray[0].push(args[0]);
	    	    await balanceArray[0].push(args[1]);
	    	    message.channel.send("User ID `" + args[0] + "` now has " + args[1] + " cubits.");
	    	    fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
                console.log(balanceArray);
	        }
	        asyncFunction();
	    } else {
			balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(args[0]) + 1]) + parseInt(args[1]);
			balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] = String(balanceArray[0][balanceArray[0].indexOf(args[0]) + 1]);
            message.channel.send("User ID `" + args[0] + "` now has " + balanceArray[0][balanceArray[0].indexOf(args[0]) + 1] + " cubits.");
            fs.writeFileSync('./arrays/balanceArray.txt', balanceArray);
            console.log(balanceArray);
	    }
    }
}
