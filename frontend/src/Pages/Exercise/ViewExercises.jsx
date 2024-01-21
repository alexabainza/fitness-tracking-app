import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewExercises() {
  const [exercises, setExercises] = useState([]);
  const [username, setUsername] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    setUsername(res.data.username);
  };
  useEffect(() => {
    loadExercises();
  }, []);

  const deleteExercise = async (user_id, exercise_id) => {
    await axios.delete(
      `http://localhost:8080/${user_id}/exercise/${exercise_id}`
    );
    loadExercises();
  };

  const loadExercises = async () => {
    const result = await axios.get(`http://localhost:8080/${id}/exercises`);
    setExercises(result.data);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="">
        <h1>{username}'s exercises</h1>
        <Link className="btn btn-outline-primary" to={`/${id}/addExercise`}>Add exercise</Link>
        {exercises.map((exercise, index) => (
          <div key={exercise.exercise_id}>
            <p>{exercise.exercise_name}</p>
            <p>{exercise.sets}</p>
            <p>{exercise.repetitions}</p>
            <p>{formatDate(exercise.date_of_exercise)}</p>
            <Link to={`/${id}/exercise/${exercise.exercise_id}`}>
              <button className="btn btn-outline-primary">View exercise</button>
            </Link>
            <button
              onClick={() => deleteExercise(id, exercise.exercise_id)}
              className="btn btn-outline-danger"
            >
              Delete exercise
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
