import { useState } from "react";
import "./Advertisements.css";
function Advertisements() {
  const [ads, setAds] = useState();
  console.log(ads);

  const handleAdvertisements = async () => {
    const response = await fetch(
      "http://localhost:8000/api/v1/advertisements/",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
    setAds(data);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <button onClick={handleAdvertisements}>Find you next clunker</button>
      {ads ? (
        <ul>
          {ads.map((ad) => (
            <li key={ad.id}>
              <h4>Year:</h4>
              <h4>Make:</h4>
              <h4>Model:</h4>
              <p>Seller:</p>
              <p>Mileage:</p>
              <p>Doors:</p>
              <p>Model:</p>
              <p>Number of owners</p>
              <p>Date Posted:</p>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
export default Advertisements;
