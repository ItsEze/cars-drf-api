import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import UserAds from "./components/UserAds";
import UserCreateAd from "./components/UserCreateAd";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./App.css";
function App() {
  const { sharedState } = useContext(AuthContext);

  return (
    <AuthContext.Provider value={{ sharedState }}>
      {sharedState.authStatus ? (
        <div className="wrapper">
          <Profile />
          <UserAds />
          <UserCreateAd />
        </div>
      ) : (
        <div>
          {sharedState.signedup ? <Login /> : <Signup />}
          {sharedState.signedup ? (
            <button
              onClick={() => {
                sharedState.setSignedup(false);
              }}
            >
              Not a user? Signup
            </button>
          ) : (
            <button
              onClick={() => {
                sharedState.setSignedup(true);
              }}
            >
              Already a user? Login
            </button>
          )}
        </div>
      )}
    </AuthContext.Provider>
  );
}

export default App;
