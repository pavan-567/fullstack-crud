import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { studentAPI } from '../services/api';
import { Student } from '../types/Student';
import toast from 'react-hot-toast';

export const useStudents = (searchQuery?: string) => {
  return useQuery({
    queryKey: ['students', searchQuery],
    queryFn: () => {
      if (searchQuery) {
        return studentAPI.search(searchQuery).then(res => res.data);
      }
      return studentAPI.getAll().then(res => res.data);
    },
  });
};

export const useStudent = (id: string) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: () => studentAPI.getById(id).then(res => res.data),
    enabled: !!id,
  });
};

export const useCreateStudent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (student: Omit<Student, 'id'>) => studentAPI.create(student).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast.success('Student created successfully!');
    },
    onError: () => {
      toast.error('Failed to create student');
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, student }: { id: string; student: Omit<Student, 'id'> }) => 
      studentAPI.update(id, student).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast.success('Student updated successfully!');
    },
    onError: () => {
      toast.error('Failed to update student');
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => studentAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast.success('Student deleted successfully!');
    },
    onError: () => {
      toast.error('Failed to delete student');
    },
  });
};
