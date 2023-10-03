import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import "./Root.css";
function Root() {
  const [username, setUsername] = useState("");
  const [authStatus, setAuthStatus] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [signedup, setSignedup] = useState(false);
  const sharedState = {
    username,
    setUsername,
    authStatus,
    setAuthStatus,
    authToken,
    setAuthToken,
    signedup,
    setSignedup,
  };
  console.log(authToken);
  const logout = () => {
    setUsername("");
    setAuthStatus(false);
    setAuthToken("");
    setSignedup(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ sharedState }}>
      <header className="header">
        <h1>Rusty But Trusty</h1>

        <nav className="nav">
          <ul className="links">
            <li> {authStatus ? "Welcome, " + username : ""}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {authStatus ? (
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
            ) : (
              ""
            )}
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
