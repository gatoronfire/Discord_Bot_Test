const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    description: String,
    avatar: String
});

module.exports = mongoose.model('User', UserSchema);

const user = new User({
    name: 'gay',
    description: 'ultra gay',
    avatar: 'gay avatar'
});

user.save()
        .then(result =>{
            console.log(result);//logea lo que se subio a la base de datos
            mongoose.connection.close()//cierra la conexion con la base de datos
        })
        .catch(err =>{
            console.error(err);
        })
