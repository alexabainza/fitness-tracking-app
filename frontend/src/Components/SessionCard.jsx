import React from 'react'

export default function SessionCard({date, onClick}) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    return (
        <div className="date-card w-100" onClick={onClick}>
          <div className="date">{formattedDate}</div>
        </div>
      );
}
