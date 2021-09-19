import React from 'react'
import Fade from 'react-reveal/Fade'

function ForgetPassword() {
    return (
        
        <div className="forgot-password">
            
            <form className="forgot-form">
                <ul>
                    <li>
           <h1>Forgot Password</h1>
           </li>
           <li>
           <p>Provide us the email id/ mobile of your medico account and we will send you an email/otp with instructions to reset your password.</p>
           </li>
           <li>
           <label>Email ID/Mobile Number</label>
           </li>
           <li>
           <input  className="in-put" name="address" type="text" placeholder="Email ID/Mobile Number" required></input>
           </li>
           <li>
           <button className="button button-primary" type="submit"  >Send Me Instructions</button>
           </li>
           </ul>
       </form>
      
        </div>
        
    )
}

export default ForgetPassword
