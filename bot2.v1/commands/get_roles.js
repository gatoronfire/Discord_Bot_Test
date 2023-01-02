const { Collection } = require("discord.js");

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

      (message.guild.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role)=> role.name))

        for(let i=0; i< members.length; i++){ 
            message.channel.send(members[i] + ", " + rolenames[i])
        }
      })
    }

}