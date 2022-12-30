module.exports = //funcion para iniciar
{
    name: 'texto',  //nombre del comando
    aliases: ['text', 'txt'],
    description: 'test command embeds', //descripcion
    execute(client, message, args, Discord)
    {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#182799') //color de la linea al costado
        .setTitle('informacion') //abajo del autor
        //.setURL() //el url va con el titulo
        //.setAuthor('gatoronfire') //arriba de todo
        .setDescription('this is an embed')// abajo del titulo
        .addFields
        (
            {name: '```nombre del server:```', value: `${message.guild.name}`, inline:true},
            {name: 'cantidad de miembros en el servidor: ', value: `${message.guild.memberCount}`, inline: true},
            {name: 'linea 3', value: 'texto 10', inline: true}
        )
        .setImage('https://yt3.ggpht.com/ytc/AAUvwnh76e3Jl1OCWh6b0SQCWWzL6tpfY2uZDpKPWlK0=s900-c-k-c0x00ffffff-no-rj')
        .setTimestamp()
        .setFooter('Bot de: GatorOnFire#5652'); //pie de pagina

        message.channel.send(newEmbed);
    }
}