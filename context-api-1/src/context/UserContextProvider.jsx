/* eslint-disable react/prop-types */
import UserContext from "./UserContext";
import {useState} from "react";

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);

    return(
        <UserContext.Provider value={{user,setUser}}>{/*The UserContextProvider is responsible for providing context 
        values to its descendents (children). It wraps its children with .provider and passes down the values using the value prop*/}
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;