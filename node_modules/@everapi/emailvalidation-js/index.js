'use strict';

class Emailvalidation {
    baseUrl = 'https://api.emailvalidation.io/v1/';

    constructor(apiKey = '') {
        this.headers = {
            apikey: apiKey
        };
    }

    call(endpoint, params = {}) {
        const paramString = new URLSearchParams({
            ...params
        }).toString();

        return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
            .then(response => response.json())
            .then(data => {
                return data;
            });
    }
    status() {
        return this.call('status');
    }

    info(email, params) {
        params.email = email;
        return this.call(`info`, params);
    }
}

export default Emailvalidation;
