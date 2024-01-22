package com.fitnessapp.backend.controller;

import com.fitnessapp.backend.model.ExerciseSession;
import com.fitnessapp.backend.repository.ExerciseRepository;
import com.fitnessapp.backend.repository.ExerciseSessionRepository;
import com.fitnessapp.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    }

