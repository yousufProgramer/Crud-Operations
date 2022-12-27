import React from 'react'
import { useState, createContext } from "react";

export const UserContext = createContext()
const UserProvider = (props) => {
    const [user,setUser] = useState([
        {id : 1, name : 'Yousuf Ahmed', position : 'Mern Stack Developer', salary : 220000,},

        {id : 2, name : 'Sumon Ahmed', position : 'React Developer', salary : 200000 ,},

        {id : 3, name : 'Yousuf Ahmed', position : 'Back End Developer', salary : 250000,},
    ])
  return (
    <div>
        <UserContext.Provider value={[user,setUser]}>
                {props.children}
        </UserContext.Provider>
 
    </div>
  )
}

export default UserProvider