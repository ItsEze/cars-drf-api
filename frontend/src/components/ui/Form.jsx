import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri"
import { FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

function Form({ formType, handleInputChange, handleSubmit, responseMsg }) {
  const sharedState = useContext(AuthContext);
  const { formData } = sharedState;
  const customProps = {
    formData: formData
  }

  return (
    <>
      {responseMsg && <h2>{responseMsg}</h2>}
      <div className="login">
        <h2>{formType}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <div className="icon">
              <MdEmail />
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              name='password'
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="icon">
              <FaLock />
            </div>
          </div>
          <button type="submit">{formType}</button>
          {formType === 'Login' && 
        <div className="signup-link">
        <p>Need an account? <Link to={{pathname: '/Signup', state: customProps}}>Sign-Up</Link></p>
      </div>
          }
        </form>
      </div>
    </>
  );
}

export default Form;