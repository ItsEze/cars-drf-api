import {useState, useEffect, useContext} from 'react'
import Logout from './Logout';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import '../Root.css'
import Filter from './ui/Filter';
import MainBody from '../MainBody';
import { fetchAdvertisements } from '../api/authApi';


export default function Home () {
  

    const sharedState = useContext(AuthContext);
    const { authToken, handleToken, ads, setAds } = sharedState;

    useEffect(() => {
      async function handleAdvertisements() {
        const data = await fetchAdvertisements(authToken)
        setAds(data)
      }
      if (authToken) {
        handleAdvertisements()
      }
        }, [authToken])

return (
  <div className='allAds'>
  {/* <Filter className='Filter'/> */}
  <MainBody />

  </div>  
);
}