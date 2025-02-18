const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true,
    },
    fullname: {
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type:String,
        required:true,
        trim:true,
    },
    city: {
        type:String,
        maxLength:150,
        trim:true
    },
    phone: {
        type:String,
    },
    image: {
        type:String
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    }],
    discarded: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'discardeds'
    },
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favorites'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', userSchema);
module.exports = { User };