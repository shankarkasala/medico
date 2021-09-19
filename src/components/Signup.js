
import Login from './signup/Login'
import Register from './signup/Register'
import React from 'react'
import { BrowserRouter as Router, Switch, Route ,useRouteMatch,Link} from 'react-router-dom'
import Tabs from './Tabs';
function Signup() {
 let { path,url} = useRouteMatch();
  return (
    <div>
    <div className="tabs">
    <div className="tab-header">
      <div className="tablink">
        <Link to={`${url}/login`}>LOGIN</Link>
        </div>
        <div  className="tablink" >
        <Link to={`${url}/register`}>REGISTER</Link>
        </div>
        </div>
    </div>
    <div class="tab-indicator"></div>
    <div class="tab-body">
    <Switch> 
      <Route path={`${url}/login`}>
      <div>
        <Login/>
        </div>
      </Route>
      <Route path={`${url}/register`}>
        <div >
    <Register/>
    </div>
      </Route>
    </Switch>
    </div>
  </div>
  )
}
export default Signup
