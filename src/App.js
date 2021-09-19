import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'
import Doctors from './components/Doctors'
import Consult from './components/Consult'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Diagnostics from './components/Diagnostics';
import Pharmacy from './components/Pharmacy'
function App() {
  return (
    <div className="grid-container">
      <Router >
        <header>
          <Nav />
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/doctors' component={Doctors} />
                <Route path='/consult' component={Consult} />
                <Route path='/pharmacy' component={Pharmacy} />
                <Route path='/diagnostics' component={Diagnostics} />
                <Route path='/signup' component={Signup} />
              </Switch>
            </div>
          </div>
        </main>
        <footer>
          all rights are reserved
        </footer>
      </Router>
    </div>
  );
}
export default App;
