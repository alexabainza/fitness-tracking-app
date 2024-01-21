import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ViewExercise = () => {
  const [exercise, setExercise] = useState({})
  const { user_id, exercise_id } = useParams();

  useEffect(()=>{
    loadExercise()
  }, [])
  const loadExercise = async () => {
    const result = await axios.get(`http://localhost:8080/${user_id}/exercise/${exercise_id}`);
    setExercise(result.data);
  };
  console.log(exercise);


  return (
    <div>
      <h1>Exercise: {exercise.exercise_name} on {exercise.date_of_exercise}</h1>
      <p>Sets: {exercise.sets}</p>
      <p>Reps: {exercise.repetitions}</p>
    </div>
  )
}
