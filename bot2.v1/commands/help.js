module.exports = //funcion para iniciar
{
    name: 'help',  //nombre del comando
    aliases: ['h', 'hlp'],
    description: 'test command', //descripcion
    execute(client, message, args, Discord)
    {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#A7B4FF')
        .setTitle('**```Lista de Comandos```**')
        .addFields
        (
            {name: '**```//borrar [cant] ```**', value: '**```borra cierta cantidad de mensajes \n tambien se usa como: b, brr```**', inline:true},
            {name: '**```//ping```**', value: '**```testea que el bot este en linea \n tambien se usa como: p, test```**', inline:true},
            {name: '**```//texto```**', value: '**```descripcion del bot y del servidor \n tambien se usa como: text, txt```**', inline: true},
            {name: '**```//imagen [que buscar]```**', value: '**```busca una imagen basada en la busqueda \n tambien se usa como: i, imn, images```**', inline: true},
            {name: '**```//reply [texto]```**', value: '**```hace que el bot responda \n tambien se usa como: rp, rply```**', inline: true},
            {name: '**```//help```**', value: '**```esto\n tambien se usa como: h, hlp```**', inline: true}
        );
        message.channel.send(newEmbed);
    }

}