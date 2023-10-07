// import IndivAds
import {useState, useEffect, useContext} from 'react'
import Logout from './Logout';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import '../Root.css'
import { fetchAdvertisements } from '../api/authApi';
import Filter from './ui/Filter';

export default function YourAds() {

  const [ads, setAds] = useState([]);
  // const [username]

  const sharedState = useContext(AuthContext);
  const { authToken, handleToken, email, setEmail } = sharedState;

  const handleAds = (e) => {
    e.preventDefault()
    setAuthToken(null)
  }

  useEffect(() => {
    async function handleAdvertisements() {
      let queryEmail = ''
      email ? queryEmail = `?email=${email}` : queryEmail = ''
      const data = await fetchAdvertisements(authToken, queryEmail)
      setAds(data)
    }
    if (authToken) {
      handleAdvertisements()
    }
      }, [authToken])

  return (
    <>
    {/* <Filter ads={ads}/> */}
      <div className='adContainer'>
        {ads.map((ad, index) =>
        <div key={index}>
        <p>Year: {ad.car.manufacture_year}</p>
        <p>Make: {ad.car.car_model.make}</p>
        <p>Model: {ad.car.car_model.model}</p>
        </div>
        )}
      </div>
    </>
  )
}

