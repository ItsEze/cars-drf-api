import React from "react";
import { useState } from "react";
import "./Signup.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { sharedState } = useContext(AuthContext);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/accounts/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log(data);
    console.log(`${data.username} has been created!`);
    setUsername("");
    setPassword("");
    sharedState.setSignedup(true);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Signup</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
