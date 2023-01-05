const mongoose = require('mongoose');
const {model, Schema} = mongoose; 
const User = require('../models/userModel.js')

const getFiles = async ( client, message, args)  =>{
    await User.find({}).then(result =>{
        console.dir(result);
        //message.channel.send(result);
        mongoose.connection.close();
    });
}

module.exports = //funcion para iniciar
{
    
    name: 'users',  //nombre (no, no te jodo)
    aliases: ['use'],
    description: 'get files from mongoose database', //descripcion
    execute( client, message, args)
    {
        //aca va el codigo a ejecutar
        User.find({}).then(result =>{
            console.log(result);
            message.channel.send(result.name);
            mongoose.connection.close();
        });

       /* User.remove({}, function(err) { 
            console.log('collection removed') 
         });*/
    }
}