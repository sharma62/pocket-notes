import React from "react";
import "./noteCard.css";

const NoteCard = ({ note}) => {
 // Split by comma
  return (
    <div className="noteCard">
      <p>{note.topic}</p>
      <div className="date_time">
        <div>{note.date}</div>
        <div style={{ fontSize: "50px" }}>.</div>
        <div>{note.time}</div>
      </div>
    </div>
  );
};

export default NoteCard;
