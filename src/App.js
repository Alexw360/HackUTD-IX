import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Search from './component/search';
import User from './component/user';
import Create from './component/create';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              {/*
              <li>
                <Link to="/">Home</Link>
              </li>
              */}
              
              <li>
                <Link to="/search">Browse</Link>
              </li>

              {/*
              <li>
                <Link to="/user">User</Link>
              </li>
              */}

              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/search' element={< Search />}></Route>
                 <Route exact path='/user' element={< User />}></Route>
                 <Route exact path='/create' element={< Create />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;