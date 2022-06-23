import { createContext } from "react";
import { InfoList } from "../InfoList/InfoList";

export const UsersContext = createContext({});
 
export const UsersProvider = (props) => { 
    const {items, setItems,setUrl} = InfoList()
    
  return (
    <UsersContext.Provider value={{items, setItems, setUrl}}>
      {props.children}
    </UsersContext.Provider>
  );
};
