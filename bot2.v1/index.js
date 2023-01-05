if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const mongoose = require('mongoose');
const connectionString = process.env.DB_URL;


const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/thebluehell';
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
    console.log('Database connected');
});

mongoose.connect(connectionString,{
    useNewURLParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCretorIndex:true
})
.then(()=> {
    console.log('conectado a la base de datos');
}).catch(err => {console.error(err)});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_hand', 'event_hnd'].forEach(handler =>{
        require(`./handlers/${handler}`)(client, Discord);
})

/*const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
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
            client.commands.get('ping').execute(message, args);
        }else if(command == 'borrar'){client.commands.get('borrar').execute(message, args);}
        else if(command == 'help'){client.commands.get('help').execute(message, args);}

   })*/
   

client.login(process.env.TOKEN);

//para seguir deberiamos aplicar este video:
//https://www.youtube.com/watch?v=Sihf7B8D4Y8&list=RDCMUC08G-UJT58SbkdmcOYyOQVw&index=24&ab_channel=CodeLyon

