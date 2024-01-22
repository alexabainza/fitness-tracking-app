import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewExercises() {
  const [exercises, setExercises] = useState([]);
  const [username, setUsername] = useState("");
  const [sessionDate, setSessionDate] = useState(""); // New state for session date

  const { user_id, session_id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/user/${user_id}`);
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
    const result = await axios.get(`http://localhost:8080/${user_id}/${session_id}`);
    setExercises(result.data);
    const extractedDate = session_id.substring(user_id.length); // Assuming user_id is at the beginning
    const formattedDate = `${extractedDate.substring(0, 4)}-${extractedDate.substring(4, 6)}-${extractedDate.substring(6)}`;
    setSessionDate(formattedDate)
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="">
      <h1>{username}'s exercises on {exercises.length > 0 ? formatDate(exercises[0].date_of_exercise) : formatDate(sessionDate)}</h1>
        <Link className="btn btn-outline-primary" to={`/${user_id}/addExercise`}>Add exercise</Link>
        {exercises.map((exercise, index) => (
          <div key={exercise.exercise_id}>
            <p>{exercise.exercise_name}</p>
            <p>{exercise.sets}</p>
            <p>{exercise.repetitions}</p>
            <p>{formatDate(exercise.date_of_exercise)}</p>
            <Link to={`/${user_id}/exercise/${exercise.exercise_id}`}>
              <button className="btn btn-outline-primary">View exercise</button>
            </Link>
            <button
              onClick={() => deleteExercise(user_id, exercise.exercise_id)}
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
