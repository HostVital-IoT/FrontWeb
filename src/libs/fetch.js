const BASE_URL = "";

async function djangoApi(endpoint, option = {}) {
    options.headers = {
        "content-Type": "application/json",
        Accept: "application/json",
    }
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}

const api = {
    users: {
        list() {
            return djangoApi('/users/');
        },
        create(user) {
            return djangoApi(`/users/signup/`, {
                method: 'POST',
                body: JSON.stringify(user),
            });
        },
        read(userId) {
            return djangoApi(`/users/login/`);
        },
        update(userId, updates) {
            return djangoApi(`/profile/${userId}/`, {
                method: 'PATCH',
                body: JSON.stringify(updates),
            });
        }
    }
}

export default api;