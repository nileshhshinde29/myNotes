import { createStore } from "vuex";

const adminModule = {
    state: {
        userType: 'Employee'
    },
    mutations: {
        changeUserType(state, payload) {
            state.userType = payload
        }
    }
}

export default createStore({
    modules: {
        admin: adminModule
    },
    state: {
        name: 'Saudagar',
        mainTitle: 'No title *****',
        secretKey: 'Niles',
        url: 'nilesh.com'
    },
    mutations: {
        setNewName(state, payload) {
            state.name = payload
        },
        changeUserType(state, payload) {
            state.name = 'sadasd' + payload
        }

    },
    actions: {

        setName(context, payload) {
            setTimeout(() => {
                context.commit('setNewName', payload)
            }, 2000)
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