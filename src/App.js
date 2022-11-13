import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Browse from './component/browse';
import Create from './component/create';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              
              <li>
                <Link to="/browse">Browse</Link>
              </li>
              
              <li>
                <Link to="/create">Create</Link>
              </li>

            </ul>
           <Routes>
                 <Route exact path='/browse' element={< Browse />}></Route>
                 <Route exact path='/create' element={< Create />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;