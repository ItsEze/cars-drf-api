import {useState, useEffect, useContext} from 'react'
import Logout from './components/Logout';
import { AuthContext } from './context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import './Root.css'
import { fetchAdvertisements } from './api/authApi';


export default function Home () {
  
    const [ads, setAds] = useState([]);

    const sharedState = useContext(AuthContext);
    const { authToken } = sharedState;

    useEffect(() => {
      async function handleAdvertisements() {
        const data = await fetchAdvertisements(authToken)
        console.log(data[0].car.car_model)
        setAds(data)
      }
      if (authToken) {
        handleAdvertisements()
      }
        }, [])

return (
  <div>
  <h1>Home</h1>
  <Link to='/logout'>
    <button className='logout-btn'>Logout</button>
  </Link>
    <div className='adContainer'>
      {ads.map((ad, index) =>
      <div>
      <p>Year: {ad.car.manufacture_year}</p>
      <p>Make: {ad.car.car_model.make}</p>
      <p>Model: {ad.car.car_model.model}</p>
      </div>
      )}
    </div>
  </div>
  
);
}