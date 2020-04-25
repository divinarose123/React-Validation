import React from 'react';
import './App.css';
import Form from './Form.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Success from './Success.js'

function App() {
  return (
    
    <Router>
      <Route path="/" exact component={Form} />
      <Route path="/success" component={Success} />
    </Router>
    
  );
}

export default App;
