import axios from 'axios';

let API_PREFIX = '';
if (process.env.DEV){
    API_PREFIX = 'http://localhost:4003';
}

API_PREFIX += '/api/v1';

/**
 * 
 * @param {Object} data (name, phone, description) 
 */
export const send = (data) => axios.post(`${API_PREFIX}/request/send`, data);