import { BehaviorSubject } from 'rxjs';

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
    logout,
    loadCurrentUser,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value;
    },
};

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
    console.log('loadCurrentUser');
    localStorage.setItem('currentUser', JSON.stringify('set by loadCurrentUser Function'));
    currentUserSubject.next('set by loadCurrentUser Function');
    // currentOrganizationSubject.next(response._org[0])
}

