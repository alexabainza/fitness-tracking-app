import React from "react";

export default function SessionCard({ date, onClick }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
    className="date-card rounded d-flex align-items-center border border-red px-5 py-2 justify-content-between mb-4"
    style={{ width: "80vw", height: "14vh", borderWidth: "6px"
    }}
      onClick={onClick}
    >
      <div
        className="date-text"
        style={{
          fontSize: "20px",
          width: "60%",
          textDecoration: "none",
          color: "black"

        }}
      >
        <p>        {formattedDate}
</p>
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
