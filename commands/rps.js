module.exports = {
    name: 'rps',
    description: 'Play Rock Paper Scissors with me!',
    usage: '<option>',
    category: 'fun',
    execute(message) {
        let num = Math.floor(Math.random()*3);
        if (num === 0) {
            if (message.content.slice(5, message.content.length) === 'rock') {
                message.channel.send("It's a tie! I picked rock!");
            } else if (message.content.slice(5, message.content.length) === 'paper') {
                message.channel.send('You beat me! I picked rock!');
            } else if (message.content.slice(5, message.content.length) === 'scissors') {
                message.channel.send('I win! I picked rock!');
            } else {
                message.channel.send("That doesn't look like an option to me! Avalible options are: rock, paper, scissors.");
            }
        } else if (num === 1) {
            if (message.content.slice(5, message.content.length) === 'rock') {
                message.channel.send('I win! I picked paper!');
            } else if (message.content.slice(5, message.content.length) === 'paper') {
                message.channel.send("It's a tie! I picked paper!");
            } else if (message.content.slice(5, message.content.length) === 'scissors') {
                message.channel.send('You beat me! I picked paper!');
            } else {
                message.channel.send("That doesn't look like an option to me! Avalible options are: rock, paper, scissors.");
            }
        } else if (num === 2) {
            if (message.content.slice(5, message.content.length) === 'rock') {
                message.channel.send('You beat me! I picked scissors!');
            } else if (message.content.slice(5, message.content.length) === 'paper') {
                message.channel.send('I win! I picked scissors!');
            } else if (message.content.slice(5, message.content.length) === 'scissors') {
                message.channel.send("It's a tie! I picked scissors!");
            } else {
                message.channel.send("That doesn't look like an option to me! Avalible options are: rock, paper, scissors.");
            }
        }
    }
}
