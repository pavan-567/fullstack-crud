import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Student } from './types/Student';
import { useStudents, useCreateStudent, useUpdateStudent } from './hooks/useStudents';
import StudentList from './components/StudentList';
import StudentModal from './components/StudentModal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | undefined>();
  
  const { data: students = [], isLoading } = useStudents();
  const createStudentMutation = useCreateStudent();
  const updateStudentMutation = useUpdateStudent();

  const handleAddStudent = () => {
    setEditingStudent(undefined);
    setShowModal(true);
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingStudent(undefined);
  };

  const handleSubmit = (data: Omit<Student, 'id'>) => {
    if (editingStudent) {
      updateStudentMutation.mutate(
        { id: editingStudent.id!, student: data },
        {
          onSuccess: () => {
            handleCloseModal();
          },
        }
      );
    } else {
      createStudentMutation.mutate(data, {
        onSuccess: () => {
          handleCloseModal();
        },
      });
    }
  };

  return (
    <div className="container-fluid py-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="row justify-content-center"
        >
          <div className="col-12 col-xl-10">
            {/* Header */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <motion.h1
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="card-title mb-0 text-primary"
                    >
                      <i className="bi bi-people-fill me-2"></i>
                      Student Management System
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted mb-0"
                    >
                      Manage your students with ease
                    </motion.p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary btn-lg"
                      onClick={handleAddStudent}
                    >
                      <i className="bi bi-plus-circle me-2"></i>
                      Add Student
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="row mb-4"
            >
              <div className="col-md-3 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="bi bi-people text-primary" style={{ fontSize: '2rem' }}></i>
                    <h3 className="mt-2 mb-0">{students.length}</h3>
                    <p className="text-muted mb-0">Total Students</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="bi bi-book text-success" style={{ fontSize: '2rem' }}></i>
                    <h3 className="mt-2 mb-0">
                      {new Set(students.map(s => s.course)).size}
                    </h3>
                    <p className="text-muted mb-0">Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="bi bi-graph-up text-info" style={{ fontSize: '2rem' }}></i>
                    <h3 className="mt-2 mb-0">
                      {students.length > 0 
                        ? Math.round(students.reduce((sum, s) => sum + s.age, 0) / students.length)
                        : 0
                      }
                    </h3>
                    <p className="text-muted mb-0">Avg Age</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="bi bi-check-circle text-warning" style={{ fontSize: '2rem' }}></i>
                    <h3 className="mt-2 mb-0">{students.length}</h3>
                    <p className="text-muted mb-0">Active</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Students List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card"
            >
              <div className="card-header">
                <h5 className="card-title mb-0">
                  <i className="bi bi-list-ul me-2"></i>
                  Students List
                </h5>
              </div>
              <div className="card-body">
                <StudentList
                  students={students}
                  onEdit={handleEditStudent}
                  isLoading={isLoading}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Modal */}
        <StudentModal
          show={showModal}
          onHide={handleCloseModal}
          student={editingStudent}
          onSubmit={handleSubmit}
          isLoading={createStudentMutation.isPending || updateStudentMutation.isPending}
        />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              borderRadius: '10px',
            },
            success: {
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
  );
};

export default App;
