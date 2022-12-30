module.exports = //funcion para iniciar
{
    name: 'reload',  //nombre del comando
    aliases: ['rl', 'retry'],
    description: 'test command', //descripcion
    execute(client, message, args)
    {
    
        //aca va el codigo a ejecutar
        message.channel.send('comando en proceso');

    
    }
}