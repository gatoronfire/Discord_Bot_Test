module.exports = //funcion para iniciar
{
    name: 'reply',  //nombre del comando
    aliases: ['rp', 'rply'],
    description: 'test command', //descripcion
    execute(client, message, args, Discord)
    {
        const prefix = '//reply'
        message.channel.bulkDelete(1);
        const argus = message.content.slice(prefix.length).trim();
        message.channel.send(argus);
    }

}