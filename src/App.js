import React, { Fragment } from "react";
import './css/App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Project from "./components/Project";
import Blog from "./components/Blog";
import About from "./components/About"

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
          <Fragment>
          <Route exact path = '/' component = {Profile} />
            <Route exact path = '/Project' component = {Project} />
            <Route exact path = '/Blog' component = {Blog} />
            <Route exact path = '/About' component = {About} />
          </Fragment>
        </Switch>
        <Contact />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
