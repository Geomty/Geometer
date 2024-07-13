const fs = require('fs');
const shop = fs.readFileSync('./arrays/shop.txt', 'utf-8');
const shopArray = []; //['item', 'item', 'item']
const shopArrayTwo = []; //['item;desc;price', 'item;desc;price', 'item;desc;price']
const shopArrayThree = []; //['item', 'desc', 'price']
const shopArrayLowercase = []; //['item', 'item', 'item']
const shopArrayLowercaseTwo = []; //['item', 'desc', 'price']
const secondArgs = [];
module.exports = {
    name: 'additem',
    description: 'Add an item to a user.',
    usage: '<user> <item>',
    category: 'dev',
    execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray) {
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
        for (i=1;i<args.length;i++) {
            secondArgs.push(args[i]);
        }
        console.log(secondArgs);
        if (shopArrayLowercase.indexOf(secondArgs.join(' ').toLowerCase()) === -1) {
            message.channel.send("That item isn't in the shop!");
            secondArgs.splice(0, 100);
        } else {
            if (inventoryArray[0].indexOf(args[0]) === -1) {
                inventoryArray[0].push(args[0]);
            }
            if (inventoryArray[0][inventoryArray[0].indexOf(args[0]) + 1] == undefined) {
                inventoryArray[0].push(shopArray[shopArrayLowercase.indexOf(secondArgs.join(' ').toLowerCase())]);
                message.channel.send(`User ID \`${args[0]}\` now has ${shopArray[shopArrayLowercase.indexOf(secondArgs.join(' ').toLowerCase())]} in their inventory.`);
                fs.writeFileSync('./arrays/inventoryArray.txt', inventoryArray);
                console.log(inventoryArray);
                secondArgs.splice(0, 100);
            } else {
                inventoryArray[0][inventoryArray[0].indexOf(args[0]) + 1] += `;${shopArray[shopArrayLowercase.indexOf(secondArgs.join(' ').toLowerCase())]}`;
                message.channel.send(`User ID \`${args[0]}\` now has ${shopArray[shopArrayLowercase.indexOf(secondArgs.join(' ').toLowerCase())]} in their inventory.`);
                fs.writeFileSync('./arrays/inventoryArray.txt', inventoryArray);
                console.log(inventoryArray);
                secondArgs.splice(0, 100);
            }
        }
    }
}
