const Discord = require('discord.js');
const client = new Discord.Client();
const querystring = require('querystring');
const fetch = require('node-fetch');
const Sequelize = require('sequelize');
const auth = require('./auth.json');
const prefix = '=';
const fs = require('fs');
let togglespamArray = [];
let togglesnipeArray = [];
let banuserArray = [];
let verifyArray = [];
let balanceArray = [];
let inventoryArray = [];
let cooldownArray = [];
const helpEmbeds = require('./utils/embeds.js');

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
});

const Snipe = sequelize.define('snipe', {
    channel: Sequelize.STRING,
    message: Sequelize.TEXT,
    author: Sequelize.STRING,
    pfp: Sequelize.TEXT,
    date: Sequelize.BIGINT,
});

const Editsnipe = sequelize.define('editsnipe', {
    channel: Sequelize.STRING,
    message: Sequelize.TEXT,
    author: Sequelize.STRING,
    pfp: Sequelize.TEXT,
    date: Sequelize.BIGINT,
});

const Help = sequelize.define('help', {
    message: Sequelize.STRING,
    author: Sequelize.STRING,
    page: Sequelize.STRING,
});


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log("Geometer is online and ready to go!");
    const playingActivities = ['=help', 'with you', 'Minecraft', 'Among Us'];
    const watchingActivities = ['Netflix', 'YouTube', `${client.guilds.cache.size} Servers`, 'for commands', 'you', 'paint dry', 'grass grow'];
    const listeningActivities = ['Spotify', 'the radio', 'music']
    client.user.setActivity('=help | ' + client.guilds.cache.size + ' Servers', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=qwyshfGJLp4' });
    setInterval(function() {
        const num = Math.round(Math.random()*4);
        if (num == 0) {
            client.user.setActivity(playingActivities[Math.round(Math.random()*4)]);
        } else if (num == 1) {
            client.user.setActivity(watchingActivities[Math.round(Math.random()*7)], { type: 'WATCHING' });
        } else if (num == 2) {
            client.user.setActivity(listeningActivities[Math.round(Math.random()*3)], { type: 'LISTENING' });
        } else if (num == 3) {
            client.user.setActivity('=help | ' + client.guilds.cache.size + ' Servers', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=qwyshfGJLp4' });
        }
    }, 10000);

    var togglespamArrayData = fs.readFileSync('./arrays/togglespamArray.txt', 'utf-8');
    var togglespamArrayDataSplitted = togglespamArrayData.split(",");
    togglespamArray.push(togglespamArrayDataSplitted);
    console.log(togglespamArray);

    var togglesnipeArrayData = fs.readFileSync('./arrays/togglesnipeArray.txt', 'utf-8');
    var togglesnipeArrayDataSplitted = togglesnipeArrayData.split(",");
    togglesnipeArray.push(togglesnipeArrayDataSplitted);
    console.log(togglesnipeArray);

    var banuserArrayData = fs.readFileSync('./arrays/banuserArray.txt', 'utf-8');
    var banuserArrayDataSplitted = banuserArrayData.split(",");
    banuserArray.push(banuserArrayDataSplitted);
    console.log(banuserArray);

    var verifyArrayData = fs.readFileSync('./arrays/verifyArray.txt', 'utf-8');
    var verifyArrayDataSplitted = verifyArrayData.split(",");
    verifyArray.push(verifyArrayDataSplitted);
    console.log(verifyArray);

    var balanceArrayData = fs.readFileSync('./arrays/balanceArray.txt', 'utf-8');
    var balanceArrayDataSplitted = balanceArrayData.split(",");
    balanceArray.push(balanceArrayDataSplitted);
    console.log(balanceArray);

    var inventoryArrayData = fs.readFileSync('./arrays/inventoryArray.txt', 'utf-8');
    var inventoryArrayDataSplitted = inventoryArrayData.split(",");
    inventoryArray.push(inventoryArrayDataSplitted);
    console.log(inventoryArray);

    Snipe.sync();
    Editsnipe.sync();
    Help.sync();
});


client.on('guildCreate', createdGuild => {
    const welcome = require('./utils/welcome.js');
    welcome();
});


client.on('guildDelete', async deletedGuild => {
    client.user.setActivity('=help | ' + client.guilds.cache.size + ' Servers', { type: 'STREAMING', url: 'https://www.youtube.com/watch?v=qwyshfGJLp4' });
    deletedGuild.owner.send('Sorry to see you go :sob:').catch(err =>{
        return;
    });
    if (verifyArray[0].indexOf(deletedGuild.id) != -1) {
        await verifyArray[0].splice(verifyArray.indexOf(deletedGuild.id + 1));
        await verifyArray[0].splice(verifyArray.indexOf(deletedGuild.id));
        fs.writeFileSync('./arrays/verifyArray.txt', verifyArray);
        console.log(verifyArray);
    } else return;
});


client.on('messageDelete', async deletedMessage => {
    const snipeDate = new Date();
    const snipeDelete = await Snipe.destroy({ where: { channel: deletedMessage.channel.id } });
    const snipeCreate = await Snipe.create({
        channel: deletedMessage.channel.id,
        message: deletedMessage.content,
        author: deletedMessage.author.username + '#' + deletedMessage.author.discriminator,
        pfp: deletedMessage.author.displayAvatarURL(),
        date: new Date(),
    });

    setTimeout(async function() {
        const snipeDelete = await Snipe.destroy({ where: { channel: deletedMessage.channel.id } });
    }, 600000);
});


client.on('messageUpdate', async editedMessage => {
    const editsnipeDelete = await Editsnipe.destroy({ where: { channel: editedMessage.channel.id } });
    const editsnipeCreate = await Editsnipe.create({
        channel: editedMessage.channel.id,
        message: editedMessage.content,
        author: editedMessage.author.username + '#' + editedMessage.author.discriminator,
        pfp: editedMessage.author.displayAvatarURL(),
        date: new Date(),
    });

    setTimeout(async function() {
        const edisnipeDelete = await Editsnipe.destroy({ where: { channel: editedMessage.channel.id } });
    }, 600000);
});


client.on('message', async message => {
    if (banuserArray[0].indexOf(message.author.id) != -1 && message.content.startsWith(prefix) && !message.author.bot) {
        return message.channel.send('You are banned from using the bot. Stop trying.');
    }
    if (message.content === '<@!744626726222692389>') {
        message.channel.send(`Hey <@!${message.author.id}>, are you trying to start a pinging war with me?`);
        setTimeout (function() {
            message.channel.send('Then make sure to use the =spamping command, and for a list of all commands do =help!')
        }, 3000);
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {
        return message.channel.send("Weird, that command doesn't exist! If you are looking for a list of all commands please do =help!");
    }

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.channel.send("❌ This command can't be used inside DMs!");
    }

    if (commandName === 'work' && cooldownArray.indexOf(message.author.id) != -1) {
        return message.channel.send('This command is on cooldown!');
    }

    if (commandName === 'work') {
        cooldownArray.push(message.author.id);
        console.log(cooldownArray);
        setTimeout(function() {
            cooldownArray.splice(cooldownArray.indexOf(message.author.id), 1);
        }, 10000);
    }

    try {
        command.execute(message, args, Discord, client, querystring, fetch, togglespamArray, togglesnipeArray, banuserArray, verifyArray, balanceArray, inventoryArray, Snipe, Editsnipe, Help, helpEmbeds, auth);
    } catch (err) {
        console.log(err);
        message.channel.send('❌ There was an error executing that command.');
    }
});
client.login(auth.token);
