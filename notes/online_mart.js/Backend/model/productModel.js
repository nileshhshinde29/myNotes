const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String
    },
    productName: {
        type: String,
        required: [true, 'Please provide a product name']
    },
    productDetails: {
        type: String,
        required: [true, 'Please provide a product details']
    },
    added_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

module.exports = mongoose.model('Product', productSchema);
