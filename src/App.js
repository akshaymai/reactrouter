import React from 'react';
import './App.css';
import Nav from './components/nav'
import About from './components/about'
import Home from './components/home'
import Shop from './components/shop'
import Itemdetals from './components/itemdetals'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/shope" exact component={Shop} />
     <Route path="/item/:id"  component={Itemdetals}/>
      </Switch>
 
    </div>
    </Router>
  );
}

export default App;
