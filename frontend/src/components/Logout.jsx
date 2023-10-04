import { Navigate } from "react-router-dom"
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import '../Root'



export default function Logout() {
    const sharedState = useContext(AuthContext);
    const { authToken, setAuthToken } = sharedState;

  const handleLogout = (e) => {
    e.preventDefault()
    setAuthToken(null)
  }
  
  if(!authToken) {
//   if(userToken == undefined) {
    return <Navigate to="/"/>
  } else {
    return(
      <>
        <p className="logoutText">Are you sure you want to logout?</p>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
      </>
    )
  }

}