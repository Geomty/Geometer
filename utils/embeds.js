const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    zero: () => {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#8CFFFB')
        .setTitle('__Geometer Menu__')
        .setDescription('**Welcome to the Geometer Menu.**')
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .addFields(
            { name: 'How do I use the menu?', value: "React with the arrows below to \"change\" the page." },
            { name: 'Page 1:', value: 'You are here' },
            { name: 'Page 2:', value: 'Geometer Main Commands' },
            { name: 'Page 3:', value: 'Geometer Moderation Commands'},
            { name: 'Page 4:', value: 'Geometer Fun Commands' },
            { name: 'Page 5:', value: 'Geometer Economy Commands' },
            { name: 'Page 6:', value: 'Geometer Spam Commands' },
            { name: 'Page 7:', value: 'Geometer Developer Commands' },
        )
        .setFooter(`Page 1`);
        return helpEmbed;
    },
    one: () => {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let helpmainMessage = "Here is a list of all the avalible commands.";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.category == 'main') {
                helpmainMessage += `\n\n**=${command.name}**\n${command.description}`;
            }
        }
        const helpmainEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('__Geometer Main Commands__')
        .setDescription(helpmainMessage)
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .setFooter(`Page 2`);
        return helpmainEmbed;
    },
    two: () => {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let helpmodMessage = "Here is a list of all the avalible commands.";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.category == 'mod') {
                helpmodMessage += `\n\n**=${command.name}**\n${command.description}`;
            }
        }
        const helpmodEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('__Geometer Moderation Commands__')
        .setDescription(helpmodMessage)
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .setFooter(`Page 3`);
        return helpmodEmbed;
    },
    three: () => {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let helpfunMessage = "Here is a list of all the avalible commands.";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.category == 'fun') {
                helpfunMessage += `\n\n**=${command.name}**\n${command.description}`;
            }
        }
        const helpfunEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('__Geometer Fun Commands__')
        .setDescription(helpfunMessage)
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .setFooter(`Page 4`);
        return helpfunEmbed;
    },
    four: () => {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let helpeconomyMessage = "Here is a list of all the avalible commands.";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.category == 'economy') {
                helpeconomyMessage += `\n\n**=${command.name}**\n${command.description}`;
            }
        }
        const helpeconomyEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('__Geometer Economy Commands__')
        .setDescription(helpeconomyMessage)
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .setFooter(`Page 5`);
        return helpeconomyEmbed;
    },
    five: () => {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let helpspamMessage = "Here is a list of all the avalible commands.";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.category == 'spam') {
                helpspamMessage += `\n\n**=${command.name}**\n${command.description}`;
            }
        }
        const helpspamEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('__Geometer Spam Commands__')
        .setDescription(helpspamMessage)
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .setFooter(`Page 6`);
        return helpspamEmbed;
    },
    six: () => {
        const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
        let helpdevMessage = "Here is a list of all the avalible commands.";
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            if (command.category == 'dev') {
                helpdevMessage += `\n\n**=${command.name}**\n${command.description}`;
            }
        }
        const helpdevEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('__Geometer Developer Commands__')
        .setDescription(helpdevMessage)
        .setThumbnail('https://cdn.discordapp.com/avatars/744626726222692389/d9f187535478d904b6e42c26cb4ddf3b.png?size=128')
        .setFooter(`Page 7`);
        return helpdevEmbed;
    }
}
