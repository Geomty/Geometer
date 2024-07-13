const fs = require('fs');
const shop = fs.readFileSync('./arrays/shop.txt', 'utf-8');
const shopArray = []; //['item', 'item', 'item']
const shopArrayTwo = []; //['item;desc;price', 'item;desc;price', 'item;desc;price']
const shopArrayThree = []; //['item', 'desc', 'price']
const shopArrayLowercase = []; //['item', 'item', 'item']
const shopArrayLowercaseTwo = []; //['item', 'desc', 'price']
module.exports = {
    name: 'buy',
    description: 'Buy an item from the shop.',
    category: 'economy',
    usage: '<item>',
    guildOnly: true,
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray) {
        if (balanceArray[0].indexOf(message.author.id) === -1) {
            message.channel.send("You haven't started earning money yet! A quick and easy way to make money is with =work.");
        } else {
            if (!args[0]) {
                message.channel.send('You need to specify what you want to buy!');
            } else {
                for (const item of shop.split(',')) {
                    shopArrayTwo.push(item);
                }
                console.log(shopArrayTwo);
                for (const item of shopArrayTwo) {
                    const itemSplit = item.split(';');
                    shopArray.push(itemSplit[0]);
                    shopArrayThree.push(itemSplit[0]);
                    shopArrayThree.push(itemSplit[1]);
                    shopArrayThree.push(itemSplit[2]);
                }
                console.log(shopArray);
                console.log(shopArrayThree);
                for (const item of shopArray) {
                    shopArrayLowercase.push(item.toLowerCase());
                }
                console.log(shopArrayLowercase);
                for (const item of shopArrayThree) {
                    shopArrayLowercaseTwo.push(item.toLowerCase());
                }
                console.log(shopArrayLowercaseTwo);
                if (shopArrayLowercase.indexOf(args.join(' ').toLowerCase()) === -1) {
                    message.channel.send("That item isn't in the shop!");
                } else {
                    if (parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) < parseInt(shopArrayLowercaseTwo[shopArrayLowercaseTwo.indexOf(args.join(' ').toLowerCase()) + 2])) {
                        message.channel.send("You don't have enough cubits!");
                    } else {
                        if (inventoryArray[0].indexOf(message.author.id) === -1) {
                            inventoryArray[0].push(message.author.id);
                        }
                        if (inventoryArray[0][inventoryArray[0].indexOf(message.author.id) + 1] == undefined) {
                            inventoryArray[0].push(shopArray[shopArrayLowercase.indexOf(args.join(' ').toLowerCase())]);
                            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(shopArrayLowercaseTwo[shopArrayLowercaseTwo.indexOf(args.join(' ').toLowerCase()) + 2]);
                            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
                            message.channel.send(`Success! You have purchased ${shopArray[shopArrayLowercase.indexOf(args.join(' ').toLowerCase())]}!`);
                            fs.writeFileSync('./arrays/inventoryArray.txt', inventoryArray);
                            console.log(balanceArray);
                            console.log(inventoryArray);
                        } else {
                            inventoryArray[0][inventoryArray[0].indexOf(message.author.id) + 1] += `;${shopArray[shopArrayLowercase.indexOf(args.join(' ').toLowerCase())]}`;
                            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = parseInt(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]) - parseInt(shopArrayLowercaseTwo[shopArrayLowercaseTwo.indexOf(args.join(' ').toLowerCase()) + 2]);
                            balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1] = String(balanceArray[0][balanceArray[0].indexOf(message.author.id) + 1]);
                            message.channel.send(`Success! You have purchased ${shopArray[shopArrayLowercase.indexOf(args.join(' ').toLowerCase())]}!`);
                            fs.writeFileSync('./arrays/inventoryArray.txt', inventoryArray);
                            console.log(balanceArray);
                            console.log(inventoryArray);
                        }
                    }
                }
            }
        }
    }
}
