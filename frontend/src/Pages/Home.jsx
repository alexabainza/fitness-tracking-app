import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    const formattedUsers = result.data.map((user) => ({
      ...user,
      birthday: formatDate(user.birthday),
    }));
    setUsers(formattedUsers);
  };

  return (
    <div>
      <div className="container">
        <div className="py-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Birthday</th>

                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.birthday}</td>
                  <td className="d-flex gap-2">
                    <button className="btn btn-outline-primary">View</button>
                    <button className="btn btn-outline-danger">Delete</button>
                    <button className="btn btn-outline-success">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </div>
  );
}
