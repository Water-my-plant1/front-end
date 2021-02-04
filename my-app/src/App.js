import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import "./styles.css"

import Login from './components/login'
import CreateAccount from './components/createaccount'

import PlantPortfolio from "./components/PlantPortfolio"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link className='log' to='/login'>Login</Link>
          </li>
          <li>
            <Link className= 'crea' to='/createaccount'>Create Account</Link>
          </li>
          <li>
            <Link className='fri' to='/protected'>Friends</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute path='/protected' component={PlantPortfolio} />

          <Route path='/login' component={Login} />
          <Route path='/createaccount' component={CreateAccount} />

          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
