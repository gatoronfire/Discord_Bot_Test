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
       message.channel.send('estos son tus roles: ' + message.member.roles.cache.filter((roles) => roles.id !== 
       message.guild.id).map((role) => role.toString()));
     
       message.guild.members.fetch().then(m => {
        let members = m.map(u => u.user.username)
        console.log(members) 
        

        //you can also use "m.each(u => console.log(u.user.username))" to log each one individually
      })
                                
       //si queres sacar los roles que taguea el bot copia esto:
       //message.member.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.toString())
    }

}