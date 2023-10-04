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
    console.log('authApi-context', context)
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

  // export async function IndivAds(token) {
  //     const payload = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `token ${token}`
  //       },
  //       body:JSON.stringify(context)  
        
  //     };
  //     const body = await basicFetch("http://localhost:8000/api/v1/advertisements/", payload)
  //     return body
  
  //   }