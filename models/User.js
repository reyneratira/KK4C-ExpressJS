const mongoose = require('mongoose')
const user = require('../controllers/user')

const UserSchema = new mongoose.Schema({
    nama : {
        type : String,
        required: [true, 'Silahkan isi nama'],
        unique: true
    },
    email: {
        type : String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan email valid!']
    }
    
})

module.exports = mongoose.model('User', UserSchema)