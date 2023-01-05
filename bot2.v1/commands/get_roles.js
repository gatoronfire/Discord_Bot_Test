const { Collection } = require("discord.js");
const { PermissionsBitField } = require('discord.js');
const mongoose = require('mongoose');
const {model, Schema} = mongoose; 
const connectionString = process.env.DB_URL;

module.exports = //funcion para iniciar
{
    name: 'info',  //nombre (no, no te jodo)
    aliases: ['info'],
    description: 'get id', //descripcion
    execute( client, message, args)
    {
        

        const userSchema = new Schema({
            usernames: String,
            roleNumbers: String,
            roleNames: String
        });
        const User = model('Usuario', userSchema);

       /* User.find({/*aca va algun filtro }).then(result =>{
            /*console.log(result);
            mongoose.connection.close();
        }); */

        const user = new User({
            usernames: 'Gator on fire',
            roleNumbers: 13,
            roleNames: 'Winged'
        });

        

        //aca va el codigo a ejecutar
        const guild = message.guild;
     
       message.guild.members.fetch().then(m => {
        let usernames = m.map(u => u.user.username);

        let roleNumbers = m.map(u => u.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.toString()));

        let roleNames = m.map(u => u.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.name));

        let test = message.member.permissions.has((1 << 3));
        message.channel.send("admin: " + test);
        

        for(let i=0; i< usernames.length; i++){ 
            //message.channel.send(usernames[i] + " is: " + roleNames[i])
            const user = new User({
                usernames: usernames[i],
                roleNumbers: roleNumbers[i],
                roleNames: roleNames[i]
            });
        }

        user.save()
        .then(result =>{
            console.log(result);
            mongoose.connection.close();
        })
        .catch(err =>{
            console.error(err);
        });

      })
    }

}
/*
CREATE_INSTANT_INVITE	0x0000000000000001
KICK_MEMBERS *	0x0000000000000002
BAN_MEMBERS *	0x0000000000000004
ADMINISTRATOR *	0x0000000000000008
MANAGE_CHANNELS *	0x0000000000000010
MANAGE_GUILD *	0x0000000000000020
VIEW_AUDIT_LOG	0x0000000000000080
ADD_REACTIONS	0x0000000000000040
rest on:
https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags

*/