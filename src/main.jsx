import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ListContextProvider from "./context/listContext.jsx";
import CmntContextProvider from "./context/CmntContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListContextProvider>
      <CmntContextProvider>
        <App />
      </CmntContextProvider>
    </ListContextProvider>
  </StrictMode>
);
