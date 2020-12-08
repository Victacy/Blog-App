import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Navigation';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

import Contact from './Pages/Contact';

// import Blog from './Pages/Blog'
import About from './Pages/About'





function App() {
  return (
    <Router>
      
     <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LogIn}/>
        <Route path='/signup' component={SignUp}/>
      
        
        <Route path='/contact us' component={Contact}/>
        {/* <Route path='/blog' component={Blog}/> */}
        <Route path='/about' component={About}/>
        
     
      </Switch>
      

    </Router>
   
  );
}

export default App;
