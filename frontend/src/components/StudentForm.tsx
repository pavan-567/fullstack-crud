import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Student } from '../types/Student';
import { motion } from 'framer-motion';

const studentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  course: z.string().min(1, 'Course is required'),
  age: z.number().min(16, 'Age must be at least 16').max(100, 'Age must be less than 100'),
});

type StudentFormData = z.infer<typeof studentSchema>;

interface StudentFormProps {
  student?: Student;
  onSubmit: (data: Omit<Student, 'id'>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const StudentForm: React.FC<StudentFormProps> = ({ 
  student, 
  onSubmit, 
  onCancel, 
  isLoading = false 
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: student ? {
      name: student.name,
      email: student.email,
      course: student.course,
      age: student.age,
    } : {
      name: '',
      email: '',
      course: '',
      age: 18,
    },
  });

  const handleFormSubmit = (data: StudentFormData) => {
    onSubmit(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            id="name"
            {...register('name')}
            placeholder="Enter student name"
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            {...register('email')}
            placeholder="Enter email address"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="course" className="form-label">
            Course <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${errors.course ? 'is-invalid' : ''}`}
            id="course"
            {...register('course')}
            placeholder="Enter course name"
          />
          {errors.course && (
            <div className="invalid-feedback">{errors.course.message}</div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="age" className="form-label">
            Age <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            id="age"
            {...register('age', { valueAsNumber: true })}
            placeholder="Enter age"
            min="16"
            max="100"
          />
          {errors.age && (
            <div className="invalid-feedback">{errors.age.message}</div>
          )}
        </div>

        <div className="col-12">
          <div className="d-flex gap-2 justify-content-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner me-2"></span>
                  {student ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                student ? 'Update Student' : 'Create Student'
              )}
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default StudentForm;
