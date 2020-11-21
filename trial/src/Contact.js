import React from 'react';
import './App.css';
import Image from "react-bootstrap/Image";
import {Button} from 'react-bootstrap';



function About() {
  return (
    <div>
    <Image src="http://placekitten.com/200/200" fluid />
    <h2 className="md-3 d-flex justify-content-center">This is the about page,Welcome</h2><br/>
    
    <Button type='submit' >Plan your trip</Button>
    </div>
   
  );
}

export default About;
