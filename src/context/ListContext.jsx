import { createContext, useEffect, useState } from "react";

export const ListContext  = createContext()

const ListContextProvider = ({children})=>{
    const [sidebarList,setSidebarList]=useState([])
    const [activeList,setActiveList]=useState('No name')
    const [flag,setflag]=useState(false)
      
     return(
        <ListContext.Provider value={{sidebarList,setSidebarList,activeList,setActiveList,flag,setflag}}>
            {children}
        </ListContext.Provider>
    )
}
export default ListContextProvider