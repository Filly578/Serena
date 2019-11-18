const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ1NjM5NjM3ODA0NjQ2NDAx.XdFo0Q.ATm6hPUVxMRzYYWW_ca9xP8VETw';

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This Bot is Online!')
})

bot.on('message', msg=>{
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', msg.author.username)
            .addField('Version', version)
            .addField('Current Server', msg.guild.name)
            .setColor(0xF1C40F)
            .setThumbnail(msg.author.avatarURL)
            msg.channel.sendEmbed(embed);
        break;
        case 'ping':
            msg.channel.sendMessage('pong!')
            break;
        case 'website':
            msg.channel.sendMessage('https://www.google.com/')
            break;
        case 'info':
            if(args[1] === 'version'){
                msg.channel.sendMessage('Version ' + version);
            }else{
                msg.channel.sendMessage('Invalid Message')
            }
        break;
        case 'clear':
         if(!args[1]) return msg.reply('Error')
         msg.channel.bulkDelete(args[1]);
         break;


    }
})

bot.login(process.env.token);
