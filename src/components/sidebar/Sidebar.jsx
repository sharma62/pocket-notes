import React, { useContext, useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import Button from "./components/Button";
import "./sidebar.css";
import { CmntContext } from "../../context/CmntContext";
import { ListContext } from "../../context/listContext";

 

const Sidebar = () => {
  const initialList = [];
  const [list, setList] = useState([]);
  const { setcurrCmnt } = useContext(CmntContext);
  const { activeList, setActiveList ,flag,setflag} = useContext(ListContext);
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list")) || initialList;
    setList(storedList);
  }, []);

  const handleClick = (e) => {
    const clickedListId = e.target
      .closest(".note-list")
      ?.getAttribute("data-id");
    if (!clickedListId) return;

    const clickedList = list.find((item) => item.id === clickedListId);
    if (!clickedList) return;
    setActiveList(clickedList.id);
    // yaha css likhna hai regurding activeList ka background color gray ho jaye

    // Remove previous active background
    document.querySelectorAll(".note-list").forEach((el) => {
      el.classList.remove("bg-active");
      if (el.getAttribute("data-id") == e.target.getAttribute("data-id")) {
        el.classList.add("bg-active");
        setflag(true)
       }
     });

    //  Always get the latest notes
    const allComments = JSON.parse(localStorage.getItem("notes")) || [];
    const filteredComments = allComments.filter(
      (comment) => comment.groupId === clickedList.id
    );

    setcurrCmnt(filteredComments);
  };

  const handleSetList = (newGroup) => {
    const updatedList = [...list, newGroup];
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));

    // optional: select new list automatically
    setActiveList(newGroup.id);
    setcurrCmnt([]);
  };

  return (
    <div className="notes">
      <div className="noteList">
        <NoteList list={list} handleClick={handleClick} active={activeList} />
      </div>
      <Button onAddList={handleSetList} />
    </div>
  );
};

export default Sidebar;
