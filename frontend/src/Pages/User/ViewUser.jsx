import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function ViewUser() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    birthday: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Username:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}

                </li>
                <li className="list-group-item">
                  <b>Birthday:</b>
                  {user.birthday}

                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2 me-4" to="/home">
            Back to home
          </Link>
          <Link className="btn btn-outline-success my-2" to={`/${id}/addExercise`}>
            Add exercise
          </Link>
          <Link className="btn btn-outline-success my-2" to={`/${id}/sessions`}>
            View exercises
          </Link>
        </div>
      </div>
    </div>
  );
}
