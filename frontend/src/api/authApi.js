import { useContext } from 'react';
// import UserContext from '../contexts/UserContext';

// const userToken = useContext(UserContext)
// console.log(userToken)



async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }
  
  
  export async function signup(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/api/accounts/signup",payload)
    return body
  }
  
  export async function login(context) {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch("http://localhost:8000/api/accounts/get-token", payload)
    return body.token
  }

  export async function fetchAdvertisements(authToken, queryUrl='') {
    console.log('token', authToken)
    const payload = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${authToken}` 
      }
    }
    const body = await basicFetch(`http://localhost:8000/api/advertisements/${queryUrl}`, payload)
    console.log(body)
    return body
  }
