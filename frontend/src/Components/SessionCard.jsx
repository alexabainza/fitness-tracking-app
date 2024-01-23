import React from "react";

export default function SessionCard({ date, onClick }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      className="date-card rounded d-flex align-items-center border border-outline-black px-5 py-2 justify-content-between mb-4"
      style={{ width: "80vw", height: "14vh",   backgroundColor: "rgba(127, 255, 212, 0.712)"
    }}
      onClick={onClick}
    >
      <div
        className="date-text"
        style={{
          fontSize: "24px",
          width: "60%",
          textDecoration: "none",

        }}
      >
        {formattedDate}
      </div>{" "}
      <div className="buttons-container">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => console.log("View clicked")}
        >
          View
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => console.log("Delete clicked")}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
