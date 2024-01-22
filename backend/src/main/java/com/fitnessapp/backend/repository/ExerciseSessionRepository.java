package com.fitnessapp.backend.repository;

import com.fitnessapp.backend.model.ExerciseSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseSessionRepository extends JpaRepository<ExerciseSession, Long> {

}
