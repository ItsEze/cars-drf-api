import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchAdvertisements } from "../../api/authApi"; 
import { AiFillFilter } from 'react-icons/ai'
import '../../Root.css';

export default function Filter({ ads, setAds }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [query, setQuery] = useState('')
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const filterRef = useRef(null);

  const sharedState = useContext(AuthContext);
  const { authToken, handleToken } = sharedState;

  const handlePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleMake = (event) => {
    setMake(event.target.value);
  };

  const handleModel = (event) => {
    setModel(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const formQuery = () => {
      const queryParams = [];
    
      if (year) {
        queryParams.push(`year=${year}`);
      }
      if (make) {
        queryParams.push(`make=${make}`);
      }
      if (model) {
        queryParams.push(`model=${model}`);
      }
    
      const queryString = queryParams.join('&');
      return queryString ? `?${queryString}` : ''
    };
  
  useEffect(() => {
    
    async function handleAdvertisements() {
      const queryUrl = formQuery()
      const data = await fetchAdvertisements(authToken, queryUrl)
      setAds(data)
      console.log(ads)
    }
    if (authToken) {
      handleAdvertisements()
    }
      }, [authToken, year, make, model])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const uniqueYears = Array.from(new Set(ads.map((ad) => ad.car.manufacture_year))).sort();
  const uniqueMakes = Array.from(new Set(ads.map((ad) => ad.car.car_model.make))).sort();
  const uniqueModels = Array.from(new Set(ads.map((ad) => ad.car.car_model.model))).sort();

  return (
    <div ref={filterRef}>
      <button onClick={handlePopup} className="filter-btn">
        <AiFillFilter />
      </button>
      {popupOpen && (
        <div className="popupContainer">
          <h2>Manufacture Year</h2>
          <select value={year} onChange={handleYear}>
            <option value={""}></option>
            {uniqueYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
          <h2>Make</h2>
          <select value={make} onChange={handleMake}>
            <option value={""}></option>
            {uniqueMakes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
          <h2>Model</h2>
          <select value={model} onChange={handleModel}>
            <option value={""}></option>
            {uniqueModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}




// import React from "react"
// import {useState} from "react"
// import '../../Root.css'


// export default function Filter({ ads }) {
//     const [popupOpen, setPopupOpen] = useState(!'')
//     const [selectedYear, setSelectedYear] = useState('')
//     const [make, setMake] = useState('')
//     const [model, setModel] = useState('')

//     const handlePopup = () => {
//         setPopupOpen(!popupOpen)
//         console.log(popupOpen)
//     }

//     const handleYear = (event) => {
//         setSelectedYear(event.target.value)
//     }

//     const handleMake = (event) => {
//         setMake(event.target.value)
//     }

//     const handleModel = (event) => {
//         setModel(event.target.value)
//     }

//     return (
//         <>
//             <button onClick={handlePopup} className="filter-btn">
//             Filter Popout
//             </button>
//             {popupOpen || ( 
//                 <div className="popupContainer">
//                     <h2>Manufacture Year</h2>
//                     <select value={selectedYear} onChange={handleYear}>
//                         <option value={''}></option>
//                         {ads.map((ads, index) => (
//                             <option key={index} value={ads.car.manufacture_year}>
//                                 {ads.car.manufacture_year}
//                             </option>
//                         ))} 
//                         </select> 
//                     <h2>Make</h2>
//                     <select value={make} onChange={handleMake}>
//                         <option value={''}></option>
//                         {ads.map((ads, index) => (
//                             <option key={index} value={ads.car.car_model.make}>
//                                 {ads.car.car_model.make}
//                             </option>
//                         ))} 
//                         </select> 
//                     <h2>Model</h2>
//                     <select value={model} onChange={handleModel}>
//                         <option value={''}></option>
//                         {ads.map((ads, index) => (
//                             <option key={index} value={ads.car.car_model.model}>
//                                 {ads.car.car_model.model}
//                             </option>
//                         ))} 
//                         </select> 
//                 </div>
//             )}
//         </>
//     )
// }




