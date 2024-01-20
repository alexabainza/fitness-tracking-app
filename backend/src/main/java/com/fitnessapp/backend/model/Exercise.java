package com.fitnessapp.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity

public class Exercise {
    @Id
    @GeneratedValue
    private Long exercise_id;

    private Long user_id;

    private String exercise_name;
    private int repetitions;

}
