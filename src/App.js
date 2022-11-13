import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Browse from './component/browse';
import Create from './component/create';
import Home from './component/home';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">

              <li></li>
              
              <li>
                <Link to="/browse">Browse</Link>
              </li>
              
              <li>
                <Link to="/create">Create</Link>
              </li>

            </ul>
           
              <ul>
                 <Route exact path='/browse' element={< Browse />}></Route>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/browse">Browse</Link>
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