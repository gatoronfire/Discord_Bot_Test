module.exports = (Discord, client, message) =>
{
    client.on('guildMemberAdd', guildMember =>
    {
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Heretic');//da el rol de heretic a los nuevos

     guildMember.roles.add(welcomeRole);
     guildMember.guild.channels.cache.get('813411286544678933').send(`Bienvenido <@${guildMember.user.id}>`)
    });
    
}