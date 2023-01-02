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
        let members = m.map(u => u.user.username)
        let role = m.map(u => u.roles.cache.filter((roles) => roles.id !== 
       message.guild.id).map((role) => role.toString()))
      
        for(let i=0; i< members.length; i++){ 
            message.channel.send(members[i] + ", " + role[i])
        }
      })
                                
       //si queres sacar los roles que taguea el bot copia esto:
       //message.member.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.toString())
    }

}