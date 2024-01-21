import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
    const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  const { username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const onLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/login", user);
  
      if (response.status === 200) {
        const user_id = response.data.id;
        navigate(`/${user_id}/exercises`);
      } 
      else if(error.response.status === 401){
        setErrorMessage("User not found. Please register first.");

      }
      else {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid username or password. Please try again.");
      } else if (error.response && error.response.status === 404) {
        setErrorMessage("User not found. Please register first.");
      } else {
        console.error("An error occurred during login:", error);
        setErrorMessage("An error occurred during login. Please try again.");
      }
    }
  };
  
  return (
    <div
      className="container d-flex align-items-center justify-content-center mt-5"
      style={{ maxHeight: "100vh" }}
    >
      <div className="col-md-4 border rounded p-4">
        <h2 className="text-center m-4">Login</h2>
        <form onSubmit={onLogin}>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <div className="text-center mb-3">
            <button
              type="submit"
              className="btn btn-outline-primary mx-2"
            >
              Login
            </button>
          </div>
        </form>
        <small>
          Don't have an account yet? Register{" "}
          <span>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "red" }}
            >
              here
            </Link>
          </span>
        </small>
      </div>
    </div>
  );
}