import {useState, useEffect} from 'react';
import { AuthContext } from './context/AuthContext';
import { IndivAds } from './api/authApi';

export default function Ads() {
  const [ad, setAd] = useState('')


  useEffect (() => {
    async function getAd() {
      const ad = await IndivAds()
      setAd(ad)
    }
    getAd()

  
  }, [])

  return (
    <>
    <h1>Your Ads</h1>
    <h4>Year:</h4>
    <h4>Make:</h4>
    <h4>Model:</h4>
    <p>Seller:</p>
    <p>Mileage:</p>
    <p>Doors:</p>
    <p>Model:</p>
    <p>Number of owners</p>
    <p>Date Posted:</p>
    </>
  )
}

