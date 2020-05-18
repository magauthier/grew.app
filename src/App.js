import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import PlantCreate from './components/plant-create';
import PlantEdit from './components/plant-edit';
import PlantList from './components/plant-list';

import logo from './logo.jpg';

function App () {
    return (
       <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://astus.com/corpo" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="missingLogo" />
            </a>
            <Link to="/" className="navbar-brand">iGrew a plant</Link>
            <Link to="/" className="nav-link">Plants</Link>
            <Link to="/create" className="nav-link">Create new</Link>
          </nav>
          <br />
          <Route path="/" exact component={PlantList} />
          <Route path="/edit/:id" component={PlantEdit} />
          <Route path="/create" component={PlantCreate} />
        </div>
     </Router>
    );
}

export default App;