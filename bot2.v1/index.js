const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();

const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    for(const file of command_files){
        const command = require(`./commands/${file}`);
        
            client.commands.set(command.name, command);
        
   }

   client.once('ready',()=>{
    console.log('online');
   })

   client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command == 'ping'){
            message.channel.send("pong");
            //client.commands.get('ping').execute(message, args);
        }else if(command == 'borrar'){client.command.get('borrar').execute(message, args);}

   })

client.login('NzM1ODg5NjA2MTIxMjI2MzAz.GpHNho.R89dvRJ0YcayVphK_NRmD-0K0GpFSgiA_0PEfo');