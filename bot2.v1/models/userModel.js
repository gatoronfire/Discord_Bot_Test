const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    description: String,
    avatar: String
});

module.exports = mongoose.model('User', UserSchema);