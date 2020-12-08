import React from 'react';
import '../styles/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';





function Navigation() {
  return (
    // <Navbar bg="dark" expand="lg">
    //         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="index">
    //                 <Link className="lay p-2 "  to ="/">Home</Link>
    //                 <Link className="lay p-2" to ="/login">LogIn</Link>
    //                 <Link className="lay p-2" to ="/signup">SignUp</Link>
    //                 <Link className="lay p-2" to ="/about us">Aboutus</Link>
    //                 <Link className="lay p-2" to ="/contact us">Contact</Link>
    //                 <Link className="lay p-2" to ="/data">Data</Link>
    //                 <Link className="lay p-2" to ="/blog">Blog</Link>
    //                 <Link className="lay p-2" to ="/about">About</Link>
          

    //             </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Triumph Travels</Navbar.Brand>
        <Nav className="mr-auto">
        <Link className="lay p-2 "  to ="/">Home</Link>
        <Link className="lay p-2" to ="/login">LogIn</Link>             
         <Link className="lay p-2" to ="/signup">SignUp</Link>
              <Link className="lay p-2" to ="/contact us">Contact</Link>
                 <Link className="lay p-2" to ="/data">Data</Link>
                  <Link className="lay p-2" to ="/blog">Blog</Link>
              <Link className="lay p-2" to ="/about">About</Link>
          
        </Nav>
        {/* <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
   
  );
}

export default Navigation;
