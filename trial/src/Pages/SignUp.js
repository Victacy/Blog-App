import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../styles/Form.css';
import sea from '../images/beach.jpg'


function SignUp() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [username, setUsername] = useState("");
        const [signedup, setSignedUp] = useState("");
      
        const handleEmailInput = (event) => {
          setEmail(event.target.value);
        };
        const handlePasswordInput = (event) => {
          setPassword(event.target.value);
        };
        const handleUsernameInput = (event) => {
            setUsername(event.target.value);
          };
      
        const handleSignup = (event) => {
          event.preventDefault();
          if (email === "adorkoreunice2@gmail.com" && username==="Eunice" && password === "1234" && password==="1234") {
            setSignedUp(true);
          }
        };
      
        function handleSignout(event) {
          event.preventDefault();
          setSignedUp(false);
        }
    return (
        <div className="der">
            {signedup ? (
        <>
        <center className="der">
          <p>Congratulations,you've created a new account.</p>
          <p>Welcome to <b>Triumph Travels</b>.Feel free to book a tour to any destination of your choice </p>
          <Button onClick={handleSignout}type='submit'> Signout</Button>
          <Link to='/'>Continue</Link>
          </center>
        </>
      ) : (
        <>
        <Container >
          <center>
            <img src={sea} alt=' ' height="170px" width="700px"/>
          </center>
            <h2 className="head">Sign Up now</h2>
            <h5>For the purpose of identification,your details are required</h5>
           
          <Form className="main">
              <Form.Group className="auth" value={email} onChange={handleEmailInput}>
                  <Form.Label className="index">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@gmail.com"/>
              </Form.Group>
              <br/>
              <Form.Group className="auth" value={username} onChange={handleUsernameInput}>
                  <Form.Label className="index">UserName</Form.Label>
                  <Form.Control type="text" placeholder="username"/>
              </Form.Group>
              <br/>
              <Form.Group className="auth" type="password"
              value={password}
              onChange={(event) => handlePasswordInput(event)}>
                  <Form.Label className="index">Password</Form.Label>
                  <Form.Control type="password" placeholder="password"/>
                  <Form.Text>Your password will never be shared,trust us</Form.Text>
              </Form.Group>
              <br/>
              <Form.Group className="auth" value={password}
              onChange={(event) => handlePasswordInput(event)}>
                  <Form.Label className="index"> Repeat Password</Form.Label>
                  <Form.Control type="password" placeholder="repeat password"/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me"/> 
              </Form.Group>
              
         
          
          <Button  onClick={handleSignup} type='submit'>Sign Up</Button>
          <br/>
          Have an account?<Link to ='/login'>
          <span >Login</span>
          </Link> 
          </Form> 
          </Container>
         
          </>
      )}
        
        
          
         
        </div>
        
    )
}

export default SignUp;

