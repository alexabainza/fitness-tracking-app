package com.fitnessapp.backend.repository;

import com.fitnessapp.backend.model.Exercise;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
//    List<Exercise> findByUser_id(Long user_id);
@Query("SELECT e FROM Exercise e WHERE e.user_id = :user_id")
List<Exercise> findByUserId(Long user_id);

    @Query("SELECT e FROM Exercise e WHERE e.user_id = :user_id AND e.exercise_id = :exercise_id")
    Exercise findByExerciseId(Long user_id, Long exercise_id);

    // ExerciseRepository
    @Transactional
    @Modifying
    @Query("DELETE FROM Exercise e WHERE e.user_id = :user_id AND e.exercise_id = :exercise_id")
    void deleteByExerciseId(Long user_id, Long exercise_id);

}
