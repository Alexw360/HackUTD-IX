import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Search from './component/search';
import Create from './component/create';
import SearchBar from "./component/SearchBar";
import './App.css';
//import PlaceData from "./Data.json";
  
class App extends Component{
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
                <Link to="/create">Create</Link>
              </li>
            </ul>
            <SearchBar placeholder="Enter a place name..."/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/search' element={< Search />}></Route>
                 <Route exact path='/create' element={< Create />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;