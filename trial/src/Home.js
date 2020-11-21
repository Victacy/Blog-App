import React from 'react';
import './Form.css';
import {Button} from 'react-bootstrap';



function Home() {
  return (
    <div>
      <img src="https://wallpaperaccess.com/full/1318238.jpg" class="card-img-top" alt="" height="300px" width="250px"/>
    <h2 className="md-3 d-flex justify-content-center">Welcome to Triumph Travels</h2><br/>
    <h3 className="md-4 d-flex justify-content-center"> Amazing tours and holidays around the world</h3>
    <h4>Discover and explore the world with us.Travel the four corners of the world without going around in circles</h4>
    <Button className="plan" type='submit' >Plan your trip</Button>
    </div>
   
  );
}

export default Home;
