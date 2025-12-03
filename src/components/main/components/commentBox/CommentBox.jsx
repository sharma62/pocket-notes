import React, { useState } from "react";
import "./commentBox.css";

const CommentBox = ({ onAddNote, groupId }) => {
  const [input, setInput] = useState("");

  //  Input change handle karna
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //  Form submit ya arrow click
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return; // ignore empty text

    const newNote = {
      id: Date.now(), // unique ID
      groupId: groupId || null, // group ke saath link karne ke liye
      topic: input.trim(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    //  Parent component ko new note bhejna
    onAddNote && onAddNote(newNote);

    //  Input reset
    setInput("");
  };

  return (
    <div className="commentBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="seachBox"
          placeholder="Enter Your Text Here . . ."
          onChange={handleChange}
          value={input}
        />

        <div
          className={`send-icon ${input.trim() ? "" : "active"}`}
          onClick={handleSubmit}
        >
          <i>➤</i>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
