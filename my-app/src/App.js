import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import "./styles.css"

import Login from './components/Login'
import createaccount from './components/createaccount'

import PlantPortfolio from "./components/PlantPortfolio"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/createaccount'>Create Account</Link>
          </li>
          <li>
            <Link to='/protected'>Friends</Link>
          </li>
        </ul>

        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />

          <Route path='/login' component={Login} />
          <Route path='/createaccount' component={createaccount} />

          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
