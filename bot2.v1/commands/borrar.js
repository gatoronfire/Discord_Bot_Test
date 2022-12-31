module.exports = //funcion para iniciar
{
    name: 'borrar',  //nombre del comando
    aliases: ['b', 'brr'],
    description: 'borra x cantidad de mensajes', //descripcion
    async execute(client, message, args) //async llama a await
    {
        if(!args[0]) return message.reply("ingresar una cantidad valida de mensajes a borrar");
        if(isNaN(args[0])) return message.reply("ingresar solamente números");

        if(args[0] > 100) return message.reply("no se puede borrar mas de 100 mensajes");
        if(args[0] < 2) return message.reply("debes ingresar una cantidad mayor a 1");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>
            {
                if(message.member.roles.cache.has('812851751261962291'))
                {
                    message.channel.bulkDelete(messages);
                } else 
                {
                    message.channel.send('no tienes permisos suficientes para usar este comando');
                }
                
            });
            // espera a que los mensajes se seleccionen, despues los borra con bulkDelete
    }

}