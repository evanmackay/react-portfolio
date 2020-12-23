import React from 'react';
import NavBar from './Components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'

function App() {
  return(
    <Router>
      <div className="background">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={AboutMe}/>

          <Route exact path="/contact" component={Contact}/>

          <Route exact path="/portfolio" component={Portfolio}/>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
