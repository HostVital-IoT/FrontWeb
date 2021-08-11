const BASE_URL = "https://iot--api.herokuapp.com";

async function flaskApi(endpoint, options = {}) {
    options.headers = {
        "content-Type": "application/json",
        Accept: "application/json",
    }
    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    patients: {
        list() {
            return flaskApi('/all/');
        },
        create(patient) {
            return flaskApi(`/new/`, {
                method: 'POST',
                body: JSON.stringify(patient),
            });
        },
        read(patientId) {
            return flaskApi(`/_id:${patientId}/`);
        },
        update(patientId, updates) {
            return flaskApi(`/_id:${patientId}/`, {
                method: 'PATCH',
                body: JSON.stringify(updates),
            });
        },
        remove(patientId) {
            return flaskApi(`/_id:${patientId}/`, {
                method: 'DELETE',
            });
        },
    },
};

export default api;