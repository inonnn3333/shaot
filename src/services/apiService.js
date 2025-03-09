import axios from 'axios';

const API_URL = 'http://localhost:5555'

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

const getAllWorkDays = async () => {
    const response = await api.get('/all-data');
    
    return response.data;
}

const addWorkDay = async (workDay) => {
    await api.post('/add-data', workDay);
}

const EditWorkDay = async (workDay) => {
    await api.put(`/edit-data/${workDay.date}`, workDay);
}

const apiService = {
    getAllWorkDays,
    addWorkDay,
    EditWorkDay
};

export default apiService; 