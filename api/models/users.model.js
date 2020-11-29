const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6
    },
    pass: {
        type: String,
        required: true,
        minlength: 5
    },
    adminId: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;