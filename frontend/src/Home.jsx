import {useState, useEffect} from 'react'
import Logout from './components/Logout';
import { AuthContext } from './context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom"
import './Root.css'


export default function Home () {
  
    // const [ads, setAds] = useState();
    // console.log(ads);

    // useEffect(() => {
    //     const handleAdvertisements = async () => {
    //       const response = await fetch(
    //         "http://localhost:8000/api/v1/advertisements/",
    //         {
    //           method: "GET",
    //           headers: { "Content-Type": "application/json" },
    //         }
    //       );
    //       const data = await response.json();
    //       console.log(data);
    //       setAds(data);
    //     };
    //     handleAdvertisements()
    // },[])



return (
  <>
  <h1>Home</h1>
  <Link to='/logout'>
    <button className='logout-btn'>Logout</button>
  </Link>
  {/* <Logout /> */}
  </>
  // <main>
  //   <h1>Inventory</h1>
  //   {ads ? (
  //     <ul>
  //       {ads.map((ad) => (
  //         <li key={ad.id}>
  //           <h4>Year:</h4>
  //           <h4>Make:</h4>
  //           <h4>Model:</h4>
  //           <p>Seller:</p>
  //           <p>Mileage:</p>
  //           <p>Doors:</p>
  //           <p>Model:</p>
  //           <p>Number of owners</p>
  //           <p>Date Posted:</p>
  //         </li>
  //       ))}
  //     </ul>
  //   ) : (
  //     ""
  //   )}
  // </main>
);
}