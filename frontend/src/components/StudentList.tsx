import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Student } from '../types/Student';
import { useDeleteStudent } from '../hooks/useStudents';

interface StudentListProps {
  students: Student[];
  onEdit: (student: Student) => void;
  isLoading?: boolean;
}

const StudentList: React.FC<StudentListProps> = ({ students, onEdit, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const deleteStudentMutation = useDeleteStudent();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteStudentMutation.mutate(id);
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search students by name, email, or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Students Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filteredStudents.map((student, index) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <td>
                    <strong>{student.name}</strong>
                  </td>
                  <td>{student.email}</td>
                  <td>
                    <span className="badge bg-primary">{student.course}</span>
                  </td>
                  <td>{student.age}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => onEdit(student)}
                        title="Edit Student"
                      >
                        <i className="bi bi-pencil me-1"></i>
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(student.id!, student.name)}
                        disabled={deleteStudentMutation.isPending}
                        title="Delete Student"
                      >
                        {deleteStudentMutation.isPending ? (
                          <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                        ) : (
                          <i className="bi bi-trash me-1"></i>
                        )}
                        Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {filteredStudents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-5"
        >
          <div className="text-muted">
            <i className="bi bi-person-x" style={{ fontSize: '3rem' }}></i>
            <h5 className="mt-3">No students found</h5>
            <p>
              {searchTerm 
                ? 'Try adjusting your search terms.' 
                : 'No students have been added yet.'
              }
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StudentList;
