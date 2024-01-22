package com.fitnessapp.backend.controller;

import com.fitnessapp.backend.model.ExerciseSession;
import com.fitnessapp.backend.model.User;
import com.fitnessapp.backend.repository.ExerciseRepository;
import com.fitnessapp.backend.repository.ExerciseSessionRepository;
import com.fitnessapp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173/")
public class exerciseSessionController {
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ExerciseSessionRepository exerciseSessionRepository;

    @PostMapping("/{id}/addSession")
    ResponseEntity<?> newSession(@RequestBody ExerciseSession newExerciseSession){
        String sessionId = newExerciseSession.getExercise_session_id();
        if (exerciseSessionRepository.existsById(sessionId)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Session ID already exists");
        }

        // Set the user ID and save the exercise session
        newExerciseSession.setUser_id(newExerciseSession.getUser_id());
        ExerciseSession savedExerciseSession = exerciseSessionRepository.save(newExerciseSession);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedExerciseSession);
    }

    }

