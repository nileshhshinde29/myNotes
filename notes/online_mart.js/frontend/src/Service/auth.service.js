import { BehaviorSubject } from 'rxjs';
import { get, post } from '../Http.service/http.service'

let currentUserFromStorage
const currentUserSubject = new BehaviorSubject(currentUserFromStorage || undefined);
const currentOrganizationSubject = new BehaviorSubject(
    (currentUserFromStorage && currentUserFromStorage._org && currentUserFromStorage._org[0]) || undefined
);

try {
    currentUserFromStorage = localStorage.getItem('currentUser');
    currentUserFromStorage = JSON.parse(currentUserFromStorage);
    if (currentUserFromStorage) {
        loadCurrentUser();
    }
} catch (e) {
    logout();
}


export const authenticationService = {
    login,
    logout,
    loadCurrentUser,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

async function login(data) {
    await post('/user/login', data)
        .then(response => {
            // Cookie.set('_token', response.token, { path: '/' })
            localStorage.setItem('currentUser', JSON.stringify(response))

            currentUserSubject.next(response)

            // currentOrganizationSubject.next(response.user._org[0])

            if (response.user) {
                // history.push(paths.defaultPostLogin)
            }
            return response
        })

}

function logout() {

    localStorage.removeItem('currentUser')

    // Cookie.remove('_token', { path: '/' })

    currentUserSubject.next(undefined)

    if (window.location.pathname !== '/login') {
        // window.location.href = "/login"
        // window.location.reload()
    }
}

function loadCurrentUser() {
    get(`/user/self`).then((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response.token))
        currentUserSubject.next(response)
        // currentOrganizationSubject.next(response._org[0])
    }).catch(err => logout())
}

