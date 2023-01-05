const mongoose = require('mongoose');
const {model, Schema} = mongoose; 

module.exports = //funcion para iniciar
{
    name: 'files',  //nombre (no, no te jodo)
    description: 'get files from mongoose database', //descripcion
    execute( client, message, args)
    {
        //aca va el codigo a ejecutar
       if(User.exist())
       {
            const User = model('Usuario', userSchema);

            User.find({/*aca va algun filtro */}).then(result =>{
                console.log(result);
                message.channel.send(result);
                mongoose.connection.close();
            });

       }else{

            const userSchema = new Schema({
                usernames: String,
                roleNumbers: String,
                roleNames: String
            });

            const User = model('Usuario', userSchema);

            User.find({/*aca va algun filtro */}).then(result =>{
                console.log(result);
                message.channel.send(result);
                mongoose.connection.close();
            });

       }
    }
}