import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/Php_Project_2/back-end/backend/public/index.php',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getData = async (params = {}) => {
    try {
        const response = await api.get('', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        throw error;
    }
};

export const postData = async (params = {}, data) => {
    try {
        const response = await api.post('', data, { params });
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error.response?.data || error.message);
        throw error;
    }
};

export const updateData = async (params = {}, data) => {
    try {
        const response = await api.put('', data, { params });
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error.response?.data || error.message);
        throw error;
    }
};

export const deleteData = async (params = {}) => {
    try {
        const response = await api.delete('', { params });
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error.response?.data || error.message);
        throw error;
    }
};

export default api;
