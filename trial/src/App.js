import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navigation from './Navigation';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import AboutUs from './AboutUs';
import Contact from './Contact';
//import Search from './Search';





function App() {
  return (
    <Router>
      
     <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LogIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/about us' component={AboutUs}/>
        <Route path='/contact us' component={Contact}/>
     

      </Switch>
      
    </Router>
   
  );
}

export default App;
