import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Browse from './component/browse';
import Create from './component/create';
import Home from './component/home';
import SearchBar from "./component/SearchBar";
import Register from './component/register';
import logo from './logo.png';
import './App.css';
import PlaceData from "./Data.json";
  
class App extends Component{
  render() {
    return (
       <Router>
           <div className="App">

            {/*Header*/}
            <ul className="App-header">
              <img id="logo" src={logo} alt="logo"></img>
              <li>
                <Link to="/">Home</Link>
              </li>
              
              <li>
                <Link to="/create">Create</Link>
              </li>

              <li>
                <Link to="/register" class="button-34" role="button">Get Started</Link>
              </li>

            </ul>
            <div id="separator"></div>
            <SearchBar placeholder="Enter a place name..." data={PlaceData}/>
           <Routes>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/browse' element={< Browse />}></Route>
                 <Route exact path='/create' element={< Create />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;