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
        message.channel.send('color ' + message.member.displayHexColor );
       message.channel.send('estos son tus roles: ' + message.member.roles.cache.filter((roles) => roles.id !== 
       message.guild.id).map((role) => role.toString()));
        console.log(guild.members.fetch().user);
                                
       //si queres sacar los roles que taguea el bot copia esto:
       //message.member.roles.cache.filter((roles) => roles.id !== message.guild.id).map((role) => role.toString())
    }

}