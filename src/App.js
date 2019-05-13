import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resources from './components/Resources';
import Error from './components/Error';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router basename = "/react-website/">
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component = { Home } />
            <Route path="/about" component = { About } />
            <Route path="/projects" component = { Projects } />
            <Route path="/resources" component = { Resources } />
            <Route component = { Error } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
