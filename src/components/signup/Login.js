import React,{useState,useRef} from 'react';
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
import ForgetPassword from './ForgetPassword';
import './Signup.css'
import { BrowserRouter as Router, Switch, Route ,useRouteMatch,Link} from 'react-router-dom'

 function Login() {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);
  let { path,url} = useRouteMatch();
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <div>
    <form  id="login" className=" tabcontent">
      <ul className="form-container">
        <li>
          <label>Email ID</label>
          <input className="in-put" name="email" type="email" placeholder="Enter Email ID" required ></input>
        </li>
        <li>
          <label>Password</label>
          <input  className="in-put" name="address" type="password" placeholder="Enter Password" required></input>
        </li>
        <div className="checkbox">
        <input className="child" type="checkbox" name="Remember me" value="Remember"/>
        <label className="child2" for="Remember me"> Remember Me</label>
        </div>
        <li>
        <button className="button button-primary" type="submit"  >Login</button>
        </li>
        <li>
        <div className="forgot-link">
        <Link onClick={()=>openModal(true)} to={`${url}/forgotpass`}>Forgot Password ?</Link>
        </div>
        </li>
      </ul>
    </form>
    {
      showModal && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          < Zoom>
           <button className="close-modal" onClick={()=>closeModal(false)}>X</button>
            <div>
             <Switch>
              <Route path={`${url}/forgotpass`}>
               <ForgetPassword/>
              </Route>
            </Switch>
           </div>
         </Zoom>
        </Modal>   
      )
    }
    </div>
  );
}
export default Login