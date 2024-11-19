import React, { Children, useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider =({Children})=>{
    const [User, setUser]= useState(null);
    return(
        <UserContext.Provider value={{User,setUser}}>
            {Children}
        </UserContext.Provider>
    )
}

export default UserContextProvider