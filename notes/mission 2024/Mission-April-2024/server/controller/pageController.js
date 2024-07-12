


const createPage = async (req, res) => {

    const { banner, products } = req.body
    if (banner?.length > 0) {
        req.body.banner = banner.map(item => ({
            img: item.image,
            navigateTo: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.category}`
        }))
    }

    if (products?.length > 0) {
        let ban = banner.map(item => ({
            img: item.image,
            navigateTo: `/bannerClicked?categoryId=${req.body.category}&type=${req.body.category}`
        }))
    }
    req.body.createdBy = req.body.userId



    res.status(200).send(req.body)
}

module.exports = {
    createPage
}