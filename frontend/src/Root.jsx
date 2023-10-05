import { AuthContext } from "./context/AuthContext";
import { useState, useEffect, useRef } from 'react'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Logout from "./components/Logout";

export default function Root() {
  const [authToken, setAuthToken] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const inputRef = useRef(null);

  const handleToken = (token) => {
    setFormData({ username: '', password: '' });
    setAuthToken(token);
  };

  const sharedState = {
    formData,
    setFormData,
    authToken,
    setAuthToken,
    handleToken,
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
        {/* <div className='Page'>
          <Login handleToken={handleToken} handleInputChange={handleInputChange}/>
        </div> */}
        <Routes>
          <Route path='/' element={<Login handleToken={handleToken} handleInputChange={handleInputChange}/>}/>
          <Route path='/signup' element={<Signup handleInputChange={handleInputChange} formData={formData} />}/>
          <Route path='/home' element={<Home />}/>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      
      {/* <div id="detail"><Outlet/></div> */}
    </AuthContext.Provider>
  );
}


