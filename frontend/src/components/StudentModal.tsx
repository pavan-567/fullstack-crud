import React from 'react';
import { motion } from 'framer-motion';
import { Student } from '../types/Student';
import StudentForm from './StudentForm';

interface StudentModalProps {
  show: boolean;
  onHide: () => void;
  student?: Student;
  onSubmit: (data: Omit<Student, 'id'>) => void;
  isLoading?: boolean;
}

const StudentModal: React.FC<StudentModalProps> = ({
  show,
  onHide,
  student,
  onSubmit,
  isLoading = false,
}) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="modal-dialog modal-lg modal-dialog-centered"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {student ? 'Edit Student' : 'Add New Student'}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onHide}
              disabled={isLoading}
            ></button>
          </div>
          <div className="modal-body">
            <StudentForm
              student={student}
              onSubmit={onSubmit}
              onCancel={onHide}
              isLoading={isLoading}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentModal;
