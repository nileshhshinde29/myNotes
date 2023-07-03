import { get, post } from "../Http.service/http.service";



async function getCategories() {
    try {
        const res = await get('/category/get-categories');
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

export const categoryService = {
    getCategories,
    addCategory,

};