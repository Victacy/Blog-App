import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button,Form,} from 'react-bootstrap';
import "../styles/Form.css";

import {Link} from 'react-router-dom';
import logo from '../images/trip.jpg'

function LogIn() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "adorkoreunice2@gmail.com" && password === "1234") {
      setLoggedIn(true);
    }
  };

  function handleLogout(event) {
    event.preventDefault();
    setLoggedIn(false);
  }
    return (
        <div >
            {loggedIn ? (
          <>
          <center className="der">
            <p><h1>Welcome,Admin</h1></p>
            <p><h3>How may I be of help to you today?</h3></p>
            <Button  onClick={handleLogout}> Logout</Button>
            <Link to='/'>&nbsp;Continue</Link>
            </center>
          </>
            ) : (
            <>
          
            <Container className="pull">
              <br/>
                <center>
                <img src={logo} alt=' '/>
                </center>
                <h3 className="head">Log in to your account</h3>
          <Form className="main">
              <Form.Group className="auth" value={email} onChange={handleEmailInput}>
                  <Form.Label className="index">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@gmail.com"/>
              </Form.Group><br/>
              <Form.Group className="auth" type="password"
              value={password}
              onChange={(event) => handlePasswordInput(event)}>
                  <Form.Label className="index" >Password</Form.Label>
                  <Form.Control type="password" placeholder="password"/>
                  <Form.Text>Your password will never be shared,trust us</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me"/> 
              </Form.Group>
              <Link to ='/forgot'><span><b style={{color:"darkblue"}}>Forgot Password</b></span></Link>
              <br/>

              <Button onClick={handleLogin} type='submit'>Log in</Button>
              
          <br />
         <b style={{color:"aliceblue"}}> Don't have an account yet?</b><Link to ='/signup'>
          <span><b>SignUp</b></span>
          </Link> 
          </Form>  
          
          </Container>
          </>
      )}
         
        </div>
    );
}

export default LogIn;

