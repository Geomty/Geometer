module.exports = {
    name: 'embarrass',
    description: 'Embarrass someone.',
    usage: '<user (optional)>',
    category: 'fun',
    execute(message, args, Discord) {
	    if (message.content.slice(11, message.content.length) === '<@!704355591686062202>') {
            return message.channel.send('Hey! Stop trying to make me abuse my creator!');
        } else if (message.content.slice(11, message.content.length) === '<@!744626726222692389>') {
	        return message.channel.send('Hey! Stop trying to make me abuse myself!');
	    }
        const user = message.mentions.users.first() || message.author;
        let num = Math.floor(Math.random()*5);
        if (num === 0) {
            message.delete().catch(err => {
                console.log(err);
                return message.channel.send('❌ I need the `MANAGE_MESSAGES` permission.');
            });
            message.channel.createWebhook(message.guild.member(user.id).nickname || user.username, { avatar: user.displayAvatarURL() }).then(async webhookInit =>{
                const webhook = new Discord.WebhookClient(webhookInit.id, webhookInit.token);
                await webhook.send('i am an idiot');
                await webhook.delete();
            }).catch(err => {
                console.log(err);
                message.channel.send('❌ I need the `MANAGE_WEBHOOKS` permission.');
            });
        } else if (num === 1) {
            message.delete().catch(err => {
                console.log(err);
                return message.channel.send('❌ I need the `MANAGE_MESSAGES` permission.');
            });
            message.channel.createWebhook(message.guild.member(user.id).nickname || user.username, { avatar: user.displayAvatarURL() }).then(async webhookInit =>{
                const webhook = new Discord.WebhookClient(webhookInit.id, webhookInit.token);
                await webhook.send('owo uwu');
                await webhook.delete();
            }).catch(err => {
                console.log(err);
                message.channel.send('❌ I need the `MANAGE_WEBHOOKS` permission.');
            });
        } else if (num === 2) {
            message.delete().catch(err => {
                console.log(err);
                return message.channel.send('❌ I need the `MANAGE_MESSAGES` permission.');
            });
            message.channel.createWebhook(message.guild.member(user.id).nickname || user.username, { avatar: user.displayAvatarURL() }).then(async webhookInit =>{
                const webhook = new Discord.WebhookClient(webhookInit.id, webhookInit.token);
                await webhook.send('i have a crush on you');
                await webhook.delete();
            }).catch(err => {
                console.log(err);
                message.channel.send('❌ I need the `MANAGE_WEBHOOKS` permission.');
            });
        } else if (num === 3) {
            message.delete().catch(err => {
                console.log(err);
                return message.channel.send('❌ I need the `MANAGE_MESSAGES` permission.');
            });
            message.channel.createWebhook(message.guild.member(user.id).nickname || user.username, { avatar: user.displayAvatarURL() }).then(async webhookInit =>{
                const webhook = new Discord.WebhookClient(webhookInit.id, webhookInit.token);
                await webhook.send('I LOVE EVERYONE SO MUCH <3 <3 <3');
                await webhook.delete();
            }).catch(err => {
                console.log(err);
                message.channel.send('❌ I need the `MANAGE_WEBHOOKS` permission.');
            });
        } else if (num === 4) {
            message.delete().catch(err => {
                console.log(err);
                return message.channel.send('❌ I need the `MANAGE_MESSAGES` permission.');
            });
            message.channel.createWebhook(message.guild.member(user.id).nickname || user.username, { avatar: user.displayAvatarURL() }).then(async webhookInit =>{
                const webhook = new Discord.WebhookClient(webhookInit.id, webhookInit.token);
                await webhook.send('im proud to be a simp!');
                await webhook.delete();
            }).catch(err => {
                console.log(err);
                message.channel.send('❌ I need the `MANAGE_WEBHOOKS` permission.');
            });
        }
    }
}
