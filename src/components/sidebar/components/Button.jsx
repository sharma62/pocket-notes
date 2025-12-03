import React, { useState } from "react";
import "./btn.css";

const Button = ({ onAddList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Available colors
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#1A535C", "#5C33F6", "#e71219ff"];
  //  Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName.trim() || !selectedColor) return;

    const newGroup = {
      id:groupName.trim(),
      name: groupName.trim(),
      color: selectedColor,
      createdAt: new Date().toLocaleString(),
    };
     
    // parent ko bhejna (optional)
    onAddList && onAddList(newGroup);

    // reset
    setGroupName("");
    setSelectedColor("");
    setIsOpen(false);
  };
  
  return (
    <>
      {/*  Add button */}
      <button className="add-btn" id="openBtn" onClick={() => setIsOpen(true)}>
        +
      </button>

      {/*  Modal */}
      {isOpen && (
        <div id="myModel" className="model active" onClick={(e) => e.target.id === "myModel" && setIsOpen(false)}>
          <div className="model-content">
            <span className="closeBtn" onClick={() => setIsOpen(false)}>
              &times;
            </span>

            <div className="content-area">
              <h3>Create New Group</h3>

              <form onSubmit={handleSubmit}  >
                {/* Group Name */}
                <div className="group_name">
                  <label htmlFor="name">Group Name</label>
                  <input
                    type="text"
                    placeholder="Enter Group name"
                    name="g_name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>

                {/* Choose Color */}
                <div className="color-section">
                  <label htmlFor="color">Choose Color</label>
                  <div className="color-options">
                    {colors.map((color, idx) => (
                      <div
                        key={idx}
                        className={`color-circle ${selectedColor === color ? "selected" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
