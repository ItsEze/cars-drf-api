import React, { useState, useEffect, useRef } from "react";
import '../../Root.css';
import { AiFillFilter } from 'react-icons/ai'

export default function Filter({ ads }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const filterRef = useRef(null);

  const handlePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleYear = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMake = (event) => {
    setSelectedMake(event.target.value);
  };

  const handleModel = (event) => {
    setSelectedModel(event.target.value);
  };

  useEffect(() => {
    // Function to close the filter when clicking outside of it
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={filterRef}>
      <button onClick={handlePopup} className="filter-btn">
        <AiFillFilter />
      </button>
      {popupOpen && (
        <div className="popupContainer">
          <h2>Manufacture Year</h2>
          <select value={selectedYear} onChange={handleYear}>
            <option value={""}></option>
            {ads.map((ad, index) => (
              <option key={index} value={ad.car.manufacture_year}>
                {ad.car.manufacture_year}
              </option>
            ))}
          </select>
          <h2>Make</h2>
          <select value={selectedMake} onChange={handleMake}>
            <option value={""}></option>
            {ads.map((ad, index) => (
              <option key={index} value={ad.car.car_model.make}>
                {ad.car.car_model.make}
              </option>
            ))}
          </select>
          <h2>Model</h2>
          <select value={selectedModel} onChange={handleModel}>
            <option value={""}></option>
            {ads.map((ad, index) => (
              <option key={index} value={ad.car.car_model.model}>
                {ad.car.car_model.model}
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
//     const [selectedMake, setSelectedMake] = useState('')
//     const [selectedModel, setSelectedModel] = useState('')

//     const handlePopup = () => {
//         setPopupOpen(!popupOpen)
//         console.log(popupOpen)
//     }

//     const handleYear = (event) => {
//         setSelectedYear(event.target.value)
//     }

//     const handleMake = (event) => {
//         setSelectedMake(event.target.value)
//     }

//     const handleModel = (event) => {
//         setSelectedModel(event.target.value)
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
//                     <select value={selectedMake} onChange={handleMake}>
//                         <option value={''}></option>
//                         {ads.map((ads, index) => (
//                             <option key={index} value={ads.car.car_model.make}>
//                                 {ads.car.car_model.make}
//                             </option>
//                         ))} 
//                         </select> 
//                     <h2>Model</h2>
//                     <select value={selectedModel} onChange={handleModel}>
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




