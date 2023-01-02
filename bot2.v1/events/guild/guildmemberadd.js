module.exports = (Discord, client, message) =>
{
    client.on('guildMemberAdd', guildMember =>
    {
        /*let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Heretic');//da el rol de heretic a los nuevos

     guildMember.roles.add(welcomeRole);
     guildMember.guild.channels.cache.get('1058504489230942208').send(`Bienvenido <@${guildMember.user.id}>`)*/
     console.log(guildMember.user.id);
    });
    
}