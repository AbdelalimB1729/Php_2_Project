import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/Test_api/index.php', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllUsers = async () => {
    return await api.get('', { params: { controller: 'User', action: 'getAllUsers' } });
};

export const getUserById = async (id) => {
    return await api.get('', { params: { controller: 'User', action: 'getUserById', id } });
};

export const addUser = async (userData) => {
    return await api.post('', userData, { params: { controller: 'User', action: 'addUser' } });
};

export const deleteUser = async (id) => {
    return await api.delete('', { params: { controller: 'User', action: 'deleteUser', id } });
};

export const getAllLivres = async () => {
    return await api.get('', { params: { controller: 'Livre', action: 'getAllLivres' } });
};

export const getLivreById = async (id) => {
    return await api.get('', { params: { controller: 'Livre', action: 'getLivreById', id } });
};

export const addLivre = async (livreData) => {
    return await api.post('', livreData, { params: { controller: 'Livre', action: 'addLivre' } });
};

export const deleteLivre = async (id) => {
    return await api.delete('', { params: { controller: 'Livre', action: 'deleteLivre', id } });
};

export const getAllPaniers = async () => {
    return await api.get('', { params: { controller: 'Panier', action: 'getAllPaniers' } });
};

export const getPanierById = async (id) => {
    return await api.get('', { params: { controller: 'Panier', action: 'getPanierById', id } });
};

export const addPanier = async (panierData) => {
    return await api.post('', panierData, { params: { controller: 'Panier', action: 'addPanier' } });
};

export const deletePanier = async (id) => {
    return await api.delete('', { params: { controller: 'Panier', action: 'deletePanier', id } });
};

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
