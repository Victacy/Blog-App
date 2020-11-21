import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button,Form, FormGroup,} from 'react-bootstrap';
import "./Form.css";
import Checkbox from './Checkbox';
import {Link} from 'react-router-dom';

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
            <p>Welcome,Admin</p>
            <p>How may I be of help to you today?</p>
            <Button  onClick={handleLogout} className="log" variant="primary"> Logout</Button>
            </>
            ) : (
            <>
        
            <Container>
                <h3>Log in</h3>
          <Form >
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
              <FormGroup>
              <Button onClick={handleLogin} className="log" variant="primary" type='submit'>Log in</Button>
              <Checkbox/>
          <br className="place"/>
          Don't have an account yet?<Link to ='/signup'>
          <span style={{color:'blue'}}>SignUp</span>
          </Link> 
          </FormGroup>
          </Form>  
          
          </Container>
          </>
      )}
         
        </div>
    );
}

export default LogIn;

