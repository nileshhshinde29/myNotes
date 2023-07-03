import { get, post } from "../Http.service/http.service";



async function getProductByCategory(data) {
    try {
        const res = await post('/product/get-product-by-category-id', data);
        return res;
    } catch (err) {
        return err.response;
    }
}

const addCategory = async (data) => {
    try {
        const res = await post('/category/create-category', data)
        return res
    } catch (error) {
        return error.response;
    }
}

export const productService = {
    getProductByCategory,
    addCategory,

};