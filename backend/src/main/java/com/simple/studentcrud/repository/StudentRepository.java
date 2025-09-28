package com.simple.studentcrud.repository;

import com.simple.studentcrud.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {
    List<Student> findByNameContainingIgnoreCase(String name);
    List<Student> findByCourseContainingIgnoreCase(String course);
}
