import axios from 'axios';

export async function fetchData(endpoint, method = 'GET', body = null) {
    const baseUrl = "http://localhost:8080"
    let endPoint = baseUrl + endpoint

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const token = JSON.parse(localStorage.getItem('currentUser')); // Retrieve the token from local storage
    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`; // Include the token in the request headers
    }

    if (body) {
        options.data = body;
    }

    const response = await axios(endPoint, options);
    const data = response.data;

    return data;

}

export function get(endpoint) {
    return fetchData(endpoint);
}

export function post(endpoint, body) {
    return fetchData(endpoint, 'POST', body);
}

export function put(endpoint, body) {
    return fetchData(endpoint, 'PUT', body);
}

export function del(endpoint) {
    return fetchData(endpoint, 'DELETE');
}
