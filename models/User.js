const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true,unique: true },
    role: { type: String, enum: ['admin', 'manager', 'staff'], default: 'staff',required: true },
    gender: { type: String},
    address: { type: String},
    password: { type: String},
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
