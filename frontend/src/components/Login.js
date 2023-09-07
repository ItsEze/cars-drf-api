import React from "react";
import "./Login.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { sharedState } = useContext(AuthContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/accounts/get-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    localStorage.setItem("token", data.token);
    console.log(data.token);
    setPassword("");
    setUsername("");
    sharedState.setAuthStatus(true);
    sharedState.setAuthToken(data.token);
    sharedState.setUsername(username);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <label htmlFor="loginUsername">Username:</label>
      <input
        type="text"
        id="loginUsername"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="loginPassword">Password:</label>
      <input
        type="text"
        id="loginPassword"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
