import React from 'react';
import './Signup.css'
export default function Login() {
  return (
    <form >
      <ul className="form-container">
        <li>
          <label>Email</label>
          <input name="email" type="email" required ></input>
        </li>
        <li>
          <label>Password</label>
          <input name="address" type="password" required></input>
        </li>
        <li>
          <button className="button button-primary" type="submit"  >Login</button>
        </li>
      </ul>
    </form>
  );
}