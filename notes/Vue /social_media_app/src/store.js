import { createStore } from 'vuex'

export default createStore({

    state: {
        isLogin: localStorage.getItem('currentUser') !== null,
        name: 'nilesh',
        surname: 'shinde'
    },
    mutations: {

        setName(state, payload) {
            state.name = payload
        },
        setSurName(state, payload) {
            state.surname = payload
        },
        setLogin(state, payload) {
            console.log(state, payload);
            state.isLogin = payload
        },
    },
    actions: {
        setNameAfterTimeout(context, payload) {
            setTimeout(() => {
                context.commit('setName', payload)
            }, 3000)
        },
        setSurNameAfterTimeout(context, payload) {
            setTimeout(() => {
                context.commit('setSurName', payload)
            }, 3000)
        }
    },
    getters: {
        hashAdd(state) {
            return state.secretKey + '##'
        },
        hashAddNew(state, getters) {
            return state.url + ' /' + getters.hashAdd;
        }
    },
})