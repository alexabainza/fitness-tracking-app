import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SessionDashboard() {
  const [sessions, setSessions] = useState([]);
  const [username, setUsername] = useState("");

  const { id } = useParams();
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getSessions();
  }, []);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    setUsername(res.data.username);
  };

  const getSessions = async () => {
    const res = await axios.get(`http://localhost:8080/${id}/getSessions`);
    setSessions(res.data);
  };

  return (
    <div>
      <h1>{username}</h1>
      <Link to = {`/${id}/addExercise`} className="btn btn-outline-primary">Add exercise</Link>
      {sessions.length === 0 ? (
        <p>No sessions available</p>
      ) : (
        <ul>
          {sessions.map((session) => (
            <div key={session.exercise_session_id}>
              <Link to={`/${id}/${session.exercise_session_id}`}>
                <h3>{session.session_date}</h3>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
