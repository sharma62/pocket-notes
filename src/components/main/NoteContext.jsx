import React, { useContext, useEffect, useState } from "react";
import "./context.css";
import Header from "./components/header/NoteHeader";
import NoteCard from "./components/noteCard/NoteCard";
import CommentBox from "./components/commentBox/CommentBox";
import { ListContext } from "../../context/listContext";
import { CmntContext } from "../../context/CmntContext";

const NoteContext = () => {
  const [notes, setNotes] = useState([]);
  const { activeList } = useContext(ListContext);
  const { currCmnt, setcurrCmnt } = useContext(CmntContext);
  // console.log(activeList);
  // Load notes from currcmnt context
  useEffect(() => {
    setNotes(currCmnt);
  }, [currCmnt]);

  // Function to add a new note (passed to CommentBox)
  // const handleAddNote = (newNote) => {
  //   const updatedNotes = [...notes, newNote];
  //   setNotes(updatedNotes);
  //   localStorage.setItem("notes", JSON.stringify(updatedNotes));
  // };

  const handleAddNote = (newNote) => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = [...storedNotes, newNote];

    // Save all notes to localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Filter only current list notes for currCmnt
    const filtered = updatedNotes.filter((n) => n.groupId === activeList);
    setcurrCmnt(filtered);
  };

  return (
    <div className="main">
      <Header title={activeList} />
      <div className="main-content">
        <div className="noteCardContainer">
          {notes.length > 0 ? (
            notes.map((n, idx) => <NoteCard key={idx} note={n} />)
          ) : (
            <p>No notes found.</p>
          )}
        </div>
      </div>
      <CommentBox onAddNote={handleAddNote} groupId={activeList} />
    </div>
  );
};

export default NoteContext;
