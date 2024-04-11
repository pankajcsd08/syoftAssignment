const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true,unique: true },
    count: { type: Number},
    description: { type: String},
    inventory: { type: String},
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
