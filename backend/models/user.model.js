const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create Schema for a user 
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},{
    timestamps: true,
}
); 

// Mongoose model named users
const User = mongoose.model('User', userSchema);
module.exports = User;