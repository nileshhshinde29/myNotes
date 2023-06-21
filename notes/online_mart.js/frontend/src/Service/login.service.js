import { get, post } from "../Http.service/http.service";



const CreateUser = async (data) => {
    await post('/user/login', data)
        .then(res => { return res })
        .catch(err => { return err.response })

}

const login = async (data) => {
    await post('/user/register', data)
        .then(res => { return res })
        .catch(err => { return err.response })
}

export const loginService = {
    CreateUser,
    login,

};