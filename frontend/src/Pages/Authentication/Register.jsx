import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    birthday: "",
  });

  const { username, email, password, birthday } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/addUser", user);
    const user_id = response.data.id;
    navigate(`/${user_id}/exercises`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="birthday" className="form-label">
                Birthday
              </label>
              <input
                type="date"
                className="form-control"
                name="birthday"
                value={birthday}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Register
            </button>
          </form>
          <small>
            Already have an account? Login
            <span>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "red" }}
              >
                {" "}here
              </Link>
            </span>
          </small>
        </div>
      </div>
    </div>
  );
}
