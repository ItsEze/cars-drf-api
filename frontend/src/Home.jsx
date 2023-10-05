import {useState, useEffect, useContext} from 'react'
import Logout from './components/Logout';
import { AuthContext } from './context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import './Root.css'
import { fetchAdvertisements } from './api/authApi';
import Filter from './components/ui/Filter';


export default function Home () {
  
    const [ads, setAds] = useState([]);

    const sharedState = useContext(AuthContext);
    const { authToken, handleToken } = sharedState;

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
  <div>
  <h1>Home</h1>
  <Link to='/logout'>
    <button className='logout-btn'>Logout</button>
  </Link>
  <Filter ads={ads}/>
    <div className='adContainer'>
      {ads.map((ad, index) =>
      <div key={index}>
      <p>Year: {ad.car.manufacture_year}</p>
      <p>Make: {ad.car.car_model.make}</p>
      <p>Model: {ad.car.car_model.model}</p>
      </div>
      )}
    </div>
  </div>
  
);
}