import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5" style={{ maxHeight: '100vh' }}>
      <div className="col-md-4 border rounded p-4">
        <h2 className="text-center m-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
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
            />
          </div>
          <div className="text-center mb-3">
            <Link to="/home" type="submit" className="btn btn-outline-primary mx-2">
              Login
            </Link>
          </div>
        </form>
        <small>Don't have an account yet? Register <span><Link to="/register"  style={{ textDecoration: 'none', color: "red" }}>here</Link></span></small>
      </div>
    </div>
  );
}
