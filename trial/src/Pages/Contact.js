import React from 'react';
import '../styles/Interface.css'
import {Form,Button,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function About() {
  return (
    <div className="con" style={{color:"white"}}>
      <br/>
<br/><br/><br/>
    <h2 className="md-3 d-flex justify-content-center"><b>For more information you can contact us by</b></h2><br/>
    <center >
    <h4><p>Visiting our website:
     wwww.triumphtravels.com</p>
     <br/>
      <p>Call or whatsapp us: <br/>
      +235 173 198 901</p>
      <br/>
      <p>Locate us at: <br/>
      Nii Nortey Quarshie Street,Dzorwulu-Accra</p>
    </h4>
    </center>
    <br/>

            <Card className="play">
          <Card.Body>
            <Card.Title className="len"><b>Subscribe to our newsletter</b></Card.Title>
            <Card.Text>
            You can also subrscribe to our newsletter to receive 
              updates and information on the various tours we organise
            </Card.Text>
            <Form className="rain">
                <Form.Group className="hat">
                  <Form.Control type="email" placeholder="Email Address"/>
                  <Button variant="primary">Subscribe</Button>
                </Form.Group>
              </Form>
          </Card.Body>
        </Card>
    
    </div>
   
  );
}

export default About;
