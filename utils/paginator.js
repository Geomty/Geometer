module.exports = async (addedReaction, Help, helpEmbeds, Discord) => {
    const helpFind = await Help.findOne({ where: { message: addedReaction.message.id } });
    if (helpFind) {
        if (addedReaction.users.cache.last().id == helpFind.get('author')) {
            if (parseInt(helpFind.get('page')) == 1) {
                if (addedReaction._emoji.name == '⏪') {
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                } else if (addedReaction._emoji.name == '⬅') {
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                } else if (addedReaction._emoji.name == '➡') {
                    helpEmbeds.helpmainEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 2;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⏩') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else return;
            } else if (parseInt(helpFind.get('page')) == 2) {
                if (addedReaction._emoji.name == '⏪') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⬅') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '➡') {
                    helpEmbeds.helpmodEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 3;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⏩') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else return;
            } else if (parseInt(helpFind.get('page')) == 3) {
                if (addedReaction._emoji.name == '⏪') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⬅') {
                    helpEmbeds.helpmainEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 2;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '➡') {
                    helpEmbeds.helpfunEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 4;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⏩') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else return;
            } else if (parseInt(helpFind.get('page')) == 4) {
                if (addedReaction._emoji.name == '⏪') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⬅') {
                    helpEmbeds.helpmodEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 3;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '➡') {
                    helpEmbeds.helpeconomyEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 5;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⏩') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else return;
            } else if (parseInt(helpFind.get('page')) == 5) {
                if (addedReaction._emoji.name == '⏪') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⬅') {
                    helpEmbeds.helpfunEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 4;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '➡') {
                    helpEmbeds.helpspamEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 6;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⏩') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else return;
            } else if (parseInt(helpFind.get('page')) == 6) {
                if (addedReaction._emoji.name == '⏪') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⬅') {
                    helpEmbeds.helpeconomyEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 5;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '➡') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⏩') {
                    helpEmbeds.helpdevEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 7;
                    await helpFind.save();
                } else return;
            } else if (parseInt(helpFind.get('page')) == 7) {
                if (addedReaction._emoji.name == '⏪') {
                    helpEmbeds.helpEmbedTwo(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 1;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '⬅') {
                    helpEmbeds.helpspamEmbed(addedReaction, Discord);
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                    helpFind.page = 6;
                    await helpFind.save();
                } else if (addedReaction._emoji.name == '➡') {
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                } else if (addedReaction._emoji.name == '⏩') {
                    addedReaction.users.remove(helpFind.get('author')).catch(err =>{
                        console.log(err);
                        addedReaction.message.channel.send('❌ I need the `MANAGE_MESSAGES` permission for the menu to function properly.');
                    });
                } else return;
            }
        } else return;
    } else return;
}
