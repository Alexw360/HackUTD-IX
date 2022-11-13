import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Search from './component/search';
import User from './component/user';
import Login from './component/login';
import Register from './component/register';
import Reset from './component/reset';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/reset">Reset</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/search' element={< Search />}></Route>
                 <Route exact path='/user' element={< User />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/reset' element={< Reset />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;