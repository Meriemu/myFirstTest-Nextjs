import React, { useState } from 'react'
import Navbar from "../component/Navbar";
import { UserContext } from './Context/UserContext';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
  <UserContext.Provider value={{ user, setUser}}>
    <div>
      <Navbar /> 
        { children }
      <h2>Site footer </h2>
    </div>
  </UserContext.Provider>

  )
}

export default Layout