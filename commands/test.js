module.exports = {
    name: 'test',
    description: 'There isn\'t really much purpose to this command. In the future, if Geomty ever does a public beta testing event, this will be the command to use.',
    category: 'main',
    execute(message) {
        message.channel.send("Hey! Looks like you found my secret command! Make sure to read this command's information in =help for more details!");
    }
}
