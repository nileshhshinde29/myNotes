
const Product = require('../model/productModel')

const getProducts = async (req, res) => {
    console.log(req.user.user.id)
    try {
        Product.find({ added_by: req.user.user.id })
            .populate('added_by', 'username')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

const createProduct = async (req, res) => {

    const { productName, productDetails, image, category } = req.body

    if (!productName || !productDetails || !category) {
        res.status(400);
        throw new Error('validation error')
    }
    const product = await Product.create({
        image,
        productName,
        productDetails,
        added_by: req.user.user.id,
        category_id: category
    })
    res.status(200).json(product)
}

const getProductsByCategory = async (req, res) => {
    const { category } = req.body;
    try {
        Product.find({ category_id: category })
            .populate('added_by', 'username')
            .populate('category_id', 'categoryName')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

const getProductsAddedByUser = async (req, res) => {
    const { category } = req.body;
    try {
        Product.find({ category_id: category, added_by: req.user.user.id })
            .populate('added_by', 'username')
            .populate('category_id', 'categoryName')
            .then((products) => {
                res.status(200).json(products);
            })
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}

module.exports = { getProducts, createProduct, getProductsByCategory }