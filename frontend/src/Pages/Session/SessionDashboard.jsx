import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SessionCard from "../../Components/SessionCard";

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
    <div className="mx-5 my-3">
      <div className="d-flex justify-content-between">
        <h1>
          Hi, <span style={{ color: "blue" }}>{username}</span>!
        </h1>
        <Link
          to={`/${id}/addExercise`}
          className="btn btn-outline-primary align-items-center"
        >
          Add exercise
        </Link>
      </div>
      <p>Here are your exercise sessions:</p>

      <div className="d-flex flex-col">
        {sessions.length === 0 ? (
          <p>No sessions available</p>
        ) : (
          <ul>
            {sessions.map((session) => (
              <Link to={`/${id}/${session.exercise_session_id}`}>
                <SessionCard
                  date={session.session_date}
                  key={session.exercise_session_id}
                ></SessionCard>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
