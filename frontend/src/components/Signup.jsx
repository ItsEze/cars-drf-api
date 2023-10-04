import Form from "./ui/Form";
import { useState, useContext } from 'react';
import { signup } from "../api/authApi";
import {Navigate} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";



export default function Signup({handleInputChange}) {
  const sharedState = useContext(AuthContext);
  const { formData } = sharedState;
  console.log('signup', formData)

  const [responseMsg, setResponseMsg] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const context = {username: formData.username, password: formData.password}
    const response = await signup(context)
    if(response.password) {
      setShouldRedirect(true)
    } else {
      setResponseMsg(response.username)
    }
  }

  if (shouldRedirect) {
    return <Navigate to="/"/>
  } else {
    return <Form formType={"Signup"} handleInputChange={handleInputChange} handleSubmit={handleSubmit} responseMsg={responseMsg}/>
  }

}