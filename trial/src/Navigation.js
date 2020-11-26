

import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';





function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link className="d-inline p-2 bg-dark text-white" to ="/">Home</Link>
                    <Link className="d-inline p-2 bg-dark text-white" to ="/login">LogIn</Link>
                    <Link className="d-inline p-2 bg-dark text-white" to ="/signup">SignUp</Link>
                    <Link className="d-inline p-2 bg-dark text-white" to ="/about us">About</Link>
                    <Link className="d-inline p-2 bg-dark text-white" to ="/contact us">Contact</Link>
                    <Link className="d-inline p-2 bg-dark text-white" to ="/data">Data</Link>
          

                </Nav>
            </Navbar.Collapse>
        </Navbar>
   
  );
}

export default Navigation;
