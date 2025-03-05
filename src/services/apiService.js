import axios from 'axios';

const API_URL = 'http://localhost:5555'

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

const getAllWorkDays = async () => {
    const response = await api.get('/all-data');
    console.log("יש דאטה");
    
    return response.data;

}

const apiService = {
    getAllWorkDays
};

export default apiService; 