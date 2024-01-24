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

  const handleDeleteSession = async (user_id, session_id) => {

      await axios.delete(`http://localhost:8080/${user_id}/${session_id}`);
      getSessions();
  }


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
                <SessionCard
                  date={session.session_date}
                  key={session.exercise_session_id}
                  session={session}
                  onDelete={() => handleDeleteSession(id, session.exercise_session_id)}
                  ></SessionCard>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
