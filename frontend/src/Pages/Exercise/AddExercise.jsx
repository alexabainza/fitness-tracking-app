import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function AddExercise() {
  const navigate = useNavigate()
  const [exercise, setExercise] = useState({
    exercise_name: "",
    repetitions: 0,
    sets: 0,
    date_of_exercise: ""
  });
  const { id } = useParams()
  const { exercise_name, repetitions, sets, date_of_exercise } = exercise;

  const onInputChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = new Date(exercise.date_of_exercise).toISOString().split('T')[0].replace(/-/g, '');
    const session_id = `${id}${formattedDate}`;

    await axios.post(`http://localhost:8080/${id}/addExercise`, {
      ...exercise,
      session_id: session_id
    });

    const response = await axios.post(`http://localhost:8080/${id}/addSession`, {
      user_id: id,
      exercise_session_id: session_id,
      session_date: date_of_exercise
    });
    navigate(`/${id}/sessions`);
  };
  


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Exercise</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Exercise" className="form-label">
                Exercise Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter exercise"
                name="exercise_name"
                value={exercise_name}
                onChange={(e) => onInputChange(e)}

              ></input>
            </div>
            <div className="d-flex gap-4 w-100">
              <div className="mb-3">
                <label htmlFor="Sets" className="form-label">
                  Sets
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter number of sets"
                  name="sets"
                  value={sets}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="Repetitions" className="form-label">
                  Repetitions
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter number of repetitions per set"
                  name="repetitions"
                  value={repetitions}
                  onChange={(e) => onInputChange(e)}
                ></input>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exercise_date" className="form-label">
                Date of Exercise
              </label>
              <input
                type="date"
                className="form-control"
                name="date_of_exercise"
                value={date_of_exercise}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to={`/${id}/sessions`} className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
