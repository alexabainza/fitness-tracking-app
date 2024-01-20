import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger navbar-dark px-4">
        <Link className="navbar-brand" to="/home">
          Navbar
        </Link>
        <Link to="/addUser">
        <button className="btn btn-outline-light">Add user</button>

        </Link>
      </nav>
    </div>
  );
}
