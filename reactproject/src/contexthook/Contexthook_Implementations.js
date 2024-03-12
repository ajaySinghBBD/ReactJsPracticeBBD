import { useState } from "react";
import UserContext from "./Contexthook_Api";

const Authcontext =  (props) =>{

    const [user, setUser] = useState(localStorage.getItem("username") || "");

    const login = (username) =>{

    
        setUser(username)
        console.log(username);

        console.log("username="+ user)
    }

    const logout = ()=>{
        setUser("")
        localStorage.removeItem("username");
        // setUser(localStorage.removeItem("username"));
    } 

    return(
        <UserContext.Provider value={{user,login, logout }} >
            {props.children}
        </UserContext.Provider>
    )
};

export default Authcontext;
