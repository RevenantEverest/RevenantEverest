import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//Component Imports
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-contents">
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
