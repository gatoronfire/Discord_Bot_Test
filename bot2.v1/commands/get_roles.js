const { Collection } = require("discord.js");
const { PermissionsBitField } = require('discord.js');

module.exports = //funcion para iniciar
{
    name: 'info',  //nombre (no, no te jodo)
    aliases: ['info'],
    description: 'get id', //descripcion
    execute( client, message, args)
    {
        //aca va el codigo a ejecutar
        const guild = message.guild;
     
       message.guild.members.fetch().then(m => {
        let usernames = m.map(u => u.user.username);

        let rolenumbres = m.map(u => u.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.toString()));

        let rolenames = m.map(u => u.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.name));

        let test = message.member.permissions.has(PermissionsBitField.Flags.KickMembers);
        message.channel.send(test);

        /*for(let i=0; i< usernames.length; i++){ 
            message.channel.send(usernames[i] + " is: " + rolenames[i])
        }*/
      })
    }

}