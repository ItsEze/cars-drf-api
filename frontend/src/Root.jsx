
import { Outlet, Link } from "react-router-dom";
import './Root.css'
import { AuthContext } from "./context/AuthContext";
import {useState} from 'react'

function Root() {
  const [username, setUsername] = useState("");
  const [authStatus, setAuthStatus] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [signedup, setSignedup] = useState(false);
  const [formData, setFormData] = useState({username:'',password:''})
  const sharedState = {
    username,
    setUsername,
    authStatus,
    setAuthStatus,
    authToken,
    setAuthToken,
    signedup,
    setSignedup,
    formData,
    setFormData,
    handleToken,
    handleInputChange,
  };
  console.log(authToken);

  const logout = () => {
    setUsername("");
    setAuthStatus(false);
    setAuthToken("");
    setSignedup(false);
    localStorage.removeItem("token");
  };
  

  const handleToken = (token) => {
    setFormData({username: '', password: ''})
    setAuthToken(token)
  }

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <AuthContext.Provider value={{ sharedState }}>
        <header>
        <h1>Cars frontend</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link onClick={logout}>Logout</Link>
              </li>
          </ul>
        </nav>
      </header>
      <div id="detail"><Outlet/></div>
      </AuthContext.Provider>
  )
}

export default Root
