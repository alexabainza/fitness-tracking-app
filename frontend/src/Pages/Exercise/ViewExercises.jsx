import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewExercises() {
  const [exercises, setExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadExercises();
  }, []);

  const loadExercises = async () => {
    const result = await axios.get(`http://localhost:8080/${id}/exercises`);
    setExercises(result.data);
  };
  console.log(exercises);

  return (
    <>
      <div className="">
        {exercises.map((exercise, index) => (
          <div key={exercise.exercise_id}>
            <p>{exercise.exercise_name}</p>
            <p>{exercise.sets}</p>
            <p>{exercise.repetitions}</p>
          </div>
        ))}
      </div>
    </>
  );
}
