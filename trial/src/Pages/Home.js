import React from 'react';
import '../styles/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';





function Home() {
  return (
    <div className="bg" fluid>
      <br/><br/><br/><br/>
    <h2 className="arrange">Welcome to <span style={{color:"darkgreen"}}>Triumph</span> <span style={{color:"darkgoldenrod"}}>Travels</span></h2><br/>
    <h3 className="arrange"> Amazing tours and holidays around the world</h3><br/>
    <h5 className="arrange">Discover and explore the world with us.Travel the four corners of the world without going around in circles.
    At triumph travels,we have so many tours you can go to for relaxation,vacation or even for fun.
    We have the best staff that ensures you are able to book your tours and make the necessary arrangements you need.
    You can also plan tours individually or for your family at a discount depending on the location.
    Don't miss this amazing opportunity to travel with us all at ypour comfort </h5><br/>
    <center>
    <Button  type='submit' variant="primary" size="lg" active >Plan a trip</Button>{' '}
    </center>
    </div>
   
  );
}

export default Home;
