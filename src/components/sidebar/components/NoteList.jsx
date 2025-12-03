import React, { useState } from "react";
import Listbar from "./Listbar";

const NoteList = ({list,handleClick,active}) => {
   return (
    <div>
      {list &&
        list.map((ele,idx) => {
          return (
            <Listbar
              key={idx}
              id={ele.id}
              name={ele.name}
              icon_color={ele.color}
              handleClick={handleClick}
              active={active}
            />
          );
        })}
    </div>
  );
};

export default NoteList;
