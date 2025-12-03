import { createContext, useState } from "react";

export const CmntContext = createContext();

const CmntContextProvider = ({ children }) => {
  const [currCmnt, setcurrCmnt] = useState([]);
    return (
    <CmntContext.Provider value={{ currCmnt, setcurrCmnt }}>
      {children}
    </CmntContext.Provider>
  );
};
export default CmntContextProvider;
