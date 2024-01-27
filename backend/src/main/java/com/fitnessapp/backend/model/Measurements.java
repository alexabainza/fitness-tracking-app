package com.fitnessapp.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

import java.util.Date;

@Entity
public class Measurements {
    @Id
    private String measurement_id;

    private Long user_id;

    private Long weight;
    private Long height;
    private Date measured_date;

    @Transient
    private Double bmi;

    public String getMeasurement_id() {
        return measurement_id;
    }

    public void setMeasurement_id(String measurement_id) {
        this.measurement_id = measurement_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getWeight() {
        return weight;
    }

    public void setWeight(Long weight) {
        this.weight = weight;
    }

    public Long getHeight() {
        return height;
    }

    public void setHeight(Long height) {
        this.height = height;
    }

    public Date getMeasured_date() {
        return measured_date;
    }

    public void setMeasured_date(Date measured_date) {
        this.measured_date = measured_date;
    }

    @Transient
    public Double getBmi() {
        if (height == null || weight == null || height == 0) {
            return null; // Handle division by zero or null values
        }
        double heightInMeters = height / 100.0;
        bmi = weight / (heightInMeters * heightInMeters);
        return bmi;
    }

    public void setBmi(Double bmi) {
        this.bmi = bmi;
    }
}
