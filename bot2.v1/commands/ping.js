module.exports = //funcion para iniciar
{
    name: 'ping',  //nombre (no, no te jodo)
    aliases: ['p', 'test'],
    description: 'test command', //descripcion
    execute( message, args)
    {
        //aca va el codigo a ejecutar
        message.channel.send('pong');
    }

}