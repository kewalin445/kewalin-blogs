const mongoose = require('mongoose');
const Schema = mongoose.Schema;

productSchema = new Schema(
    {
        name: String,
        price: String,
        stock: String,
        description: String,
        category: String,
        photo: String
    },
    { timestamps: true }
)


module.exports = mongoose.model('Product', productSchema);