import {useState} from 'react'
function UserCreateAd() {
const [mileage, setMileage] = useState();
const [carModel, setCarModel] = useState();
const [owners, setOwners] = useState();
const [year, setYear] = useState();
const [regNumber, setRegNumber] = useState();
const [doors, setDoors] = useState();
const dataToPost = {
  registration_number: regNumber,
  number_of_doors: doors,
  mileage: mileage,
  car_model: carModel,
  numbers_of_owners: owners,
  manufacture_year: year
}

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/advertisements/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(dataToPost),

    });
    const data = await response.json();
    console.log(data)
    setCarModel('')
    setMileage('')
    setOwners('')
    setYear('')
    
  };

  return (
    <div>
      <form action={handleFormSubmit}>
      <h1>UserCreateAd</h1>
      <label htmlFor="carModel">Car Model:<input type="text" /></label>
      <label htmlFor="year">Year:<input type="text" /></label>
      <label htmlFor="mileage">Mileage:<input type="text" /></label>
      <label htmlFor="owners">Owners:<input type="text" /></label>
    <button type='submit'>Submit</button>

      </form>
    </div>
  );
}
export default UserCreateAd;
