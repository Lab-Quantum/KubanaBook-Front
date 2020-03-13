import axios from 'axios';

const api = axios.create({
    baseURL: "http://peil.dev/kubanabook/src/"
})

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

api.interceptors.request.use(async config => {
    if(localStorage.token) {
        config.headers.Authorization = `Bearer ${localStorage.token}`;
    }
    return config;
});

export default api;