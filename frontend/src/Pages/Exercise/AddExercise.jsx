import React from "react";
import { Link } from "react-router-dom";

export default function AddExercise() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Exercise</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="Exercise" className="form-label">
                Exercise Name
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter exercise"
                name="exercise"
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
                name="exercise_date"
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/home" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
