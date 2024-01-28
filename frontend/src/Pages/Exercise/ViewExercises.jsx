import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ExerciseComponent from "../../Components/ExerciseComponent";
import UserNavbar from "../../Components/UserNavbar"; 
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
    <div>
    <UserNavbar id={user_id} username={username} />

    </div>
      <div className="mx-5 my-3">
      <h1 className="mb-2">Your exercises on <span className="text-danger">{exercises.length > 0 ? formatDate(exercises[0].date_of_exercise) : formatDate(sessionDate)}</span></h1>
      <Link className="btn btn-outline-primary mb-4" to={`/${user_id}/addExercise`}>Add exercise</Link>
      <Link className="btn btn-outline-success mb-4 mx-3" to={`/${user_id}/${session_id}/setMeasurements`}>Set your measurements for {formatDate(sessionDate)}</Link>

      {exercises.length > 0 ? (
          <>
          
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {exercises.map((exercise) => (
                <div className="col mb-4" key={exercise.exercise_id}>
                <ExerciseComponent exercise={exercise} onDelete={() => deleteExercise(user_id, exercise.exercise_id)} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>You have no exercises on {formatDate(sessionDate)}</p>
        )}
      </div>
    </>
  );
}
