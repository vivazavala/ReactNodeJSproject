const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    links: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    adminId: {
        type: Number, 
        required: true
    }
}, {
    timestamps: true,
});

const Links = mongoose.model('Links', linkSchema);

module.exports = Links;