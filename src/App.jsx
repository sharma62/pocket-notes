import Home from "./pages/Home";
import Note from "./pages/Note";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "./context/listContext";

function App() {
  const { flag, setflag } = useContext(ListContext);
  console.log(flag);
  if(flag)
  {
    document.querySelector('.note')
  }
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/note" element={!flag ? <Navigate to="/" /> : <Note />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
