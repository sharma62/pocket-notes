import React from "react";
import { Link } from "react-router-dom";

const Listbar = ({ icon_color, name, id,handleClick,active }) => {
  let initials = name
    .trim() // extra spaces hata dega
    .split(" ") // ['Suraj', 'Kumar', 'Sharma']
    .slice(0, 2) // sirf pehle 2 words lega ['Suraj', 'Kumar']
    .map((word) => word[0].toUpperCase()) // ['S', 'K']
    .join(""); // 'SK'
    let i = 0;

   
    // document.querySelector('.note-list')
  return (
    <div>
      <Link to={`/note`} onClick={handleClick}>
        <div className={`note-list`} data-id={name}>
          <div className={`icon`}style={{backgroundColor: `${icon_color}`}} >{initials.toUpperCase()}</div>
          <div className="list" >{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Listbar;
