import Login from './components/Login'
import Signup from './components/Signup'
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
function Dashboard () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [signedup, setSignedup] = useState(false);
    console.log(isLoggedIn);
    const login = (bool) => {
      setIsLoggedIn(true);
    };
    const signup = () => {
      setSignedup(true);
    };
    return (
        <AuthContext.Provider value={{ login, signup }}>

    <div className='wrapper'>
        {
        isLoggedIn ? <Login/> : <Signup/>
        }
    </div>
        </AuthContext.Provider>
    )
}
export default Dashboard