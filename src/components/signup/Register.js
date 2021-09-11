import React from 'react';
import './Signup.css'
export default function Register() {
  return (
    <form >

      <ul className="form-container">
        <li>
          <label>Email</label>
          <input name="email" type="email" required ></input>
        </li>
        <li>
          <label>Name</label>
          <input name="name" type="text" required ></input>
        </li>
        <li>
          <label>Password</label>
          <input name="address" type="password" required></input>
        </li>
        <li>
          <label>Confrim Password</label>
          <input name="address" type="password" required></input>
        </li>
        <li>
          <button className="button button-primary" type="submit"  >Register</button>
        </li>
      </ul>
    </form>
  );
}