import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5" style={{ maxHeight: '100vh' }}>
    <div className="col-md-4 border rounded p-4">
      <h2 className="text-center m-4">Register</h2>
      <form>
      <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Birthday" className="form-label">
            Birthday
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter birthday"
            name="birthday"
          />
        </div>
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
            Register
          </Link>
        </div>
      </form>
      <small>Already have an account? Login <span><Link to="/login"  style={{ textDecoration: 'none', color: "red" }}>here</Link></span></small>
    </div>
  </div>  )
}
