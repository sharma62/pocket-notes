import React from "react";
import img from '../../assets/img.png'
import "./context.css";
 
const MainContext = () => {
  return (
    <>
       <div className="main">
          <div className="main-content">
            <img src={img} alt="notes" className="main-img" />
            <h1>Pocket Notes</h1>
             <p>
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
            </p>
          </div>

          <p className="footer">🔒 end-to-end encrypted</p>
        </div>
    </>
  );
};

export default MainContext;
