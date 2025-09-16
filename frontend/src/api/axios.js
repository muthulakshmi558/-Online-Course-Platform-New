import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getCourses = async () => {
    try {
        const response = await api.get('courses/');
        return response.data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error;
    }
};

export const getCourseById = async (id) => {
    try {
        const response = await api.get(`courses/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching course ${id}:`, error);
        throw error;
    }
};