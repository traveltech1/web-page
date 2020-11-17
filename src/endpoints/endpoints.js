import { API } from '../environment';

async function makeRequest(sufix = '/', method = 'GET', payload = {}, multipart = false) {
    const contentType = !multipart ? 'application/json': 'multipart/form-data';
    const general = {
        method,
        // mode: 'no-cors',
        headers: {
            Accept: '*/*',
            // 'Cache-Control': 'no-cache',
            'Content-Type': contentType
        },
    };

    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
        general.body = JSON.stringify(payload);
    }

    return await fetch(`${API}${sufix}`, general)
    .then((response) => {
        console.log(method, response.status, `${API}${sufix}`);
        if(!response.ok) {
            throw Error(`Service error ${API}${sufix} ${JSON.stringify(response)}`);
        }
        return response.json();
    })
    .then((jsonresponse) => jsonresponse)
    .catch((err) => {
        console.log(err);
        throw Error(`Error Service`);
    })
}

export const endpoints = {
    cities: {
        getCities: async () => {
            const response = await makeRequest('/cities', 'GET');
            return response;
        },
    },
    tripTypes: {
        getTripTypes: async () => {
            const response = await makeRequest('/trip-types', 'GET');
            return response;
        },
    },
    hosts: {
        getHosts: async () => {
            const response = await makeRequest('/hosts', 'GET');
            return response;
        },
    }
};