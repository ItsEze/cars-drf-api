import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from 'react-router-dom'


function Form({formType, handleInputChange, formData, handleSubmit, responseMsg}) {
    console.log(formData)
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
            <FaRegUser />
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
            <RiLockPasswordFill />
            </div>
          </div>
          <button type="submit">{formType}</button>
          {formType == 'Login' && 
          <div className="signup-link">
            <p>Need an account? <Link to='/Signup'>Sign-Up</Link></p>
          </div>
          }
        </form>
      </div>
      </>
    );
  }
  
  export default Form;