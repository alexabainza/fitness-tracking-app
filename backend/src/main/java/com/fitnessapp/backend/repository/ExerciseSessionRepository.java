package com.fitnessapp.backend.repository;

import com.fitnessapp.backend.model.ExerciseSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ExerciseSessionRepository extends JpaRepository<ExerciseSession, String> {

}
