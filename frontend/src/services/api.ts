import axios from 'axios';
import { Student } from '../types/Student';

const API_BASE_URL = 'http://localhost:8085/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const studentAPI = {
  // Get all students
  getAll: () => api.get<Student[]>('/students'),
  
  // Get student by ID
  getById: (id: string) => api.get<Student>(`/students/${id}`),
  
  // Create new student
  create: (student: Omit<Student, 'id'>) => api.post<Student>('/students', student),
  
  // Update student
  update: (id: string, student: Omit<Student, 'id'>) => api.put<Student>(`/students/${id}`, student),
  
  // Delete student
  delete: (id: string) => api.delete(`/students/${id}`),
  
  // Search students
  search: (query: string) => api.get<Student[]>(`/students/search?q=${query}`),
};

export default api;
