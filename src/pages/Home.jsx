import React, { useContext, useState } from "react";
import "./page.css";
import MainContext from "../components/main/MainContext";
import Sidebar from "../components/sidebar/Sidebar";
 const Home = () => {

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
        <MainContext />
      </div>
    </>
  );
};

export default Home;
