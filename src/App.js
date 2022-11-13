import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Search from './component/search';
import Create from './component/create';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/search' element={< Search />}></Route>
                 <Route exact path='/create' element={< Create />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;