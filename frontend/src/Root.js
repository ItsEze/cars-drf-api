import {Outlet, Link} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import "./Root.css"
function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signedup, setSignedup] = useState(false);
  console.log(isLoggedIn);
  const login = (bool) => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  const signup = () => {
    setSignedup(true);
  };
    return (
<AuthContext.Provider value={{ login, logout, signup }}>
        <header className="header">
          <h1>Car Trader</h1>
  
          <nav className="nav">
          <ul className="links">
            <li>
              <Link to='/'>Home</Link>
              </li>
           <li>
            <Link to='/dashboard'>Dashboard</Link>
            </li> 
           <li>
            {
              isLoggedIn ? <Link onClick={logout}>Logout</Link> : ''
            }
            </li> 
          </ul>
        </nav>
        </header>
        <main>
          <Outlet />
        </main>
        
   
        </AuthContext.Provider>

    );
  }
  
  export default Root;
  