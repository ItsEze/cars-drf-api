import {useState, useEffect} from 'react';
import { AuthContext } from './context/AuthContext';

export default function IndivAds() {
  const [ad, setAd] = useState('')


  useEffect (() => {
    async function getAd() {
      const ad = await IndivAds()
      setAd(ad)
    }


  
  })

  return (
    <>
    <h1>Your Ads</h1>
    </>
  )
}

