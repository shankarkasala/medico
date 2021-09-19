import React from 'react';
import './Signup.css'
export default function Register() {
  return (
    <form id="register" className=" tabcontent">
      <ul className="form-container">
        <li>
          <label>Email ID</label>
          <input  className="in-put" name="email" type="email" placeholder="Enter Email ID" required ></input>
        </li>
        <li>
          <label>Name</label>
          <input  className="in-put" name="name" type="text" placeholder="Enter Name" required ></input>
        </li>
        <li>
          <label>Password</label>
          <input  className="in-put" name="address" type="password" placeholder="Enter Password" required></input>
        </li>
        <li>
          <label>Conform Password</label>
          <input  className="in-put" name="address" type="password" placeholder="Conform Password" required></input>
        </li>
        <li>
          <button className="button button-primary" type="submit"  >Register</button>
        </li>
      </ul>
    </form>
  );
}