import { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [streetname, setStreetname] = useState("");
  const [streetnumber, setStreetnumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const dataToUpdate = {
    street_name: streetname,
    street_number: streetnumber,
    zip_code: zipcode,
    city: city,
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/accounts/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(dataToUpdate),
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    const handleGetProfile = async () => {
      const response = await fetch("http://localhost:8000/accounts/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setStreetname(data.street_name);
      setStreetnumber(data.street_number);
      setZipcode(data.zip_code);
      setCity(data.city);
    };
    handleGetProfile();
  }, []);
  return (
    <div class="profile">
      <h2>User Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <label htmlFor="streetname">Street Name:</label>
        <input
          type="text"
          id="streetname"
          value={streetname}
          onChange={(e) => {
            setStreetname(e.target.value);
          }}
        />
        <label htmlFor="streetnumber">Street Number:</label>
        <input
          type="text"
          id="streetnumber"
          value={streetnumber}
          onChange={(e) => {
            setStreetnumber(e.target.value);
          }}
        />
        <label htmlFor="zipcode">Zip code:</label>
        <input
          type="text"
          id="zipcode"
          value={zipcode}
          onChange={(e) => {
            setZipcode(e.target.value);
          }}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default Profile;
