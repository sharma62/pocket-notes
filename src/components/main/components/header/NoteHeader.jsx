import React, { useContext, useEffect, useState } from "react";
import "./NoteHeader.css";
import { ListContext } from "../../../../context/listContext";
import img from '../../../../assets/vector.png'
const NoteHeader = ({ title }) => {
  const [iconColor, setIconcolor] = useState("");
  const { activeList } = useContext(ListContext);

  useEffect(() => {
    const sidebarList = JSON.parse(localStorage.getItem("list")) || [];
    const currList = sidebarList.find((l) => l.id === activeList);

    if (currList) {
      setIconcolor(currList.color);
    }
  }, [activeList]);

  // Create initials from title (e.g., "Suraj Kumar" -> "SK")
  const icon = title
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <div className="noteHeader" style={{ color: "white", cursor: "pointer" }}>
      <img src={img} className="headerImg" alt="arraw" />
      <div className="icon" style={{ backgroundColor: iconColor }}>
        {icon}
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default NoteHeader;
