
import { Outlet, Link } from "react-router-dom";
import './Root.css'
// import { AuthContext } from "./context/AuthContext";
import { createContext } from "react";
import {useState} from 'react'
import Login from "./components/Login";

export default function Root() {
  // const [username, setUsername] = useState("");
  // const [authStatus, setAuthStatus] = useState(false);
  const [authToken, setAuthToken] = useState("");
  // const [signedup, setSignedup] = useState(false);
  const [formData, setFormData] = useState({username:'Email',password:'Password'})
  const [userInfo, setUserInfo] = useState({})
  const UserContext = createContext()
  console.log(formData)
  // const userInfo = {token: authToken, ...formData}
  // console.log(userInfo)
  // const sharedState = {
  //   username,
  //   setUsername,
  //   authStatus,
  //   setAuthStatus,
  //   authToken,
  //   setAuthToken,
  //   signedup,
  //   setSignedup,
  //   formData,
  //   setFormData,
  //   handleToken,
  //   handleInputChange,
  // };
  // console.log(authToken);

  // const logout = () => {
  //   setUsername("");
  //   setAuthStatus(false);
  //   setAuthToken("");
  //   setSignedup(false);
  //   localStorage.removeItem("token");
  // };
  

  const handleToken = (token) => {
    // setUserInfo({token: token, username: formData.username})
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
    <UserContext.Provider value={{ userInfo }}>
        {/* <header>
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
      </header> */}
      <>
      <div className='Page'>
      <Login handleInputChange={handleInputChange} formData={formData} handleToken={handleToken}/>
      </div>
      </>

      <div id="detail"><Outlet/></div>
      </UserContext.Provider>
  )
}


