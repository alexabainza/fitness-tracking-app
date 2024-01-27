package com.fitnessapp.backend.controller;

import com.fitnessapp.backend.model.Measurements;
import com.fitnessapp.backend.model.User;
import com.fitnessapp.backend.repository.ExerciseRepository;
import com.fitnessapp.backend.repository.ExerciseSessionRepository;
import com.fitnessapp.backend.repository.MeasurementsRepository;
import com.fitnessapp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173/")
public class MeasurementsController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private ExerciseSessionRepository exerciseSessionRepository;
    @Autowired
    private MeasurementsRepository measurementsRepository;

    @PostMapping("/{id}/{session_id}/setMeasurements")
    ResponseEntity<?> newMeasurement(@RequestBody Measurements newMeasurement, @PathVariable Long id, @PathVariable String session_id) {
        if (!userRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with ID " + id + " not found.");
        }

        Measurements savedMeasurement = measurementsRepository.save(newMeasurement);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMeasurement);
    }
}
