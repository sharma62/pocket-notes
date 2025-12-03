import React, { useContext } from "react";
import "./page.css";
import Sidebar from "../components/sidebar/Sidebar";
import NoteContext from "../components/main/NoteContext";

 
const note = () => {
    return (
    <>
      <div className="pocket">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="title">
            <h2>Pocket Notes</h2>
          </div>
          <Sidebar />
        </div>

        {/* Main Content */}
        <NoteContext /> 
      </div>  
    </>
  );
};

export default note;
