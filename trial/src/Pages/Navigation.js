import React from 'react';
import '../styles/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';





function Navigation() {
  return (

        <Navbar bg="dark" variant="dark" className="well">
        <Navbar.Brand >Triumph Travels</Navbar.Brand>
        <Nav className="mr-auto">
        <Link className="lay p-2 "  to ="/">Home</Link>
        <Link className="lay p-2" to ="/login">LogIn</Link>             
         <Link className="lay p-2" to ="/signup">SignUp</Link>
              <Link className="lay p-2" to ="/contact us">Contact</Link>
                  <Link className="lay p-2" to ="/blog">Blog</Link>
              <Link className="lay p-2" to ="/about">About</Link>
          
        </Nav>
      </Navbar>
   
  );
}

export default Navigation;
