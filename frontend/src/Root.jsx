import { AuthContext } from "./context/AuthContext";
import { useState, useEffect, useRef } from 'react'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Logout from "./components/Logout";
import CreateAd from "./components/CreateAd";
import YourAds from "./components/YourAds";
// import {NextUIProvider} from "@nextui-org/react";
import Navbars from "./NavBar";
import MainBody from "./MainBody";

export default function Root() {
  const [authToken, setAuthToken] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [ads, setAds] = useState([]);
  const [email, setEmail] = useState('')

  const inputRef = useRef(null);

  const handleToken = (token) => {
    setEmail(formData.username)
    setFormData({ username: '', password: '' });
    setAuthToken(token);
  };

  console.log(email)

  const sharedState = {
    formData,
    setFormData,
    authToken,
    setAuthToken,
    handleToken,
    ads,
    setAds,
    email,
    setEmail
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

useEffect(() => {
  const token = localStorage.getItem('authToken')
  if (token && !authToken) {
    handleToken(token)
  }
}, [])

  return (
    <AuthContext.Provider value={sharedState}>
      <Router>
        {/* <div className="page"> */}
        <Navbars />
        <div className="body">
        <Routes>
          <Route path='/' element={<Login handleToken={handleToken} handleInputChange={handleInputChange}/>}/>
          <Route path='/signup' element={<Signup handleInputChange={handleInputChange} formData={formData} />}/>
          <Route path='/home' element={<Home />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path='/createAd' element={<CreateAd />}/>
          <Route path='/yourAds' element={<YourAds />}/>
          <Route path='/mainBody' element={<MainBody />}/>
        </Routes>
        </div>
        {/* </div> */}
      </Router> 
      {/* </NextUIProvider> */}
      
      {/* <div id="detail"><Outlet/></div> */}
    </AuthContext.Provider>
  );
}


