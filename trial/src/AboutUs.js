import React from 'react';
import { Button,Row,Col } from 'react-bootstrap';
import './Form.css';

//import {Button} from 'react-bootstrap';



function AboutUs() {
  return (
    <div class="card" style={{ width: '18rem' }}>
        <Row className="rows">
            <Col className="columns">
        <div class="card" style={{ width: '18rem' }}>

        <img src="https://www.hawaiimagazine.com/sites/default/files/field/image/GettyImages-629772034.jpg" class="card-img-top" alt="..."/>
 
 <h5 class="card-title">Maiu Beach,Hawaii</h5>
 <h6>15 days</h6>
 <p class="card-text">$12,000</p>
 <Button className="Button" variant="success">See More</Button>
 <br/>
        </div>
        </Col>
        
        <Col className="columns" md={4}>
        <div class="card" style={{ width: '18rem' }}>
        <img src="https://images.squarespace-cdn.com/content/v1/58fbfecf725e25a3d1966494/1510077894351-D6IWNOD8RGQ3Y5NN8J0S/ke17ZwdGBToddI8pDm48kKc5JrecVlHQ1jRDzbdoK8BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwR3nhnsLpdQ9ARmW4G8jXYijHcRVRHs8XdLaZ_E8GKA9lyMsMaQrYVH1g7d3xgN34/image-asset.jpeg?format=750w"class="card-img-top" alt="..."/>
    <h5 class="card-title">Eiffel Tower, Paris-France</h5>
    <h6>3 days</h6>
    <p class="card-text">$1,789</p>
    <Button className="Button" variant="success">See More</Button>
    <br/>
        </div>
        </Col>
    </Row>
    <Row className="rows">
        <Col className="columns" md={4}>
   <div class="card" style={{ width: '18rem' }}>
    <img src="https://www.travelportland.com/wp-content/uploads/2019/08/NR_Nearby_ColumbiaGorge_MultnomahFalls_99837764_shutterstock_tusharkoley-.jpg" class="card-img-top" alt="..."/>
    <h5 class="card-title">Multnomah Falls,Oregon-Columbia</h5>
    <h6>5 days</h6>
    <p class="card-text">$2,789</p>
    <Button className="Button" variant="success">See More</Button>
    <br/>
    </div>
    </Col>
    <Col className="columns">
    <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.golaos.tours/wp-content/uploads/2018/07/Bokeo-Nature-Reserve.jpg" class="card-img-top" alt="..."/>
        <h5 class="card-title">Bokeo National Reserve, Laos</h5>
        <h6>7 days</h6>
        <p class="card-text">$2,220</p>
        <Button className="Button" variant="success">See More</Button>
        <br/>
    </div>
    </Col>
    </Row>

    <Row classname="rows">
        <Col className="columns">
    <div class="card" style={{ width: '18rem' }}>
        <img src="https://www.traveller.com.au/content/dam/images/h/1/k/g/i/c/image.related.articleLeadwide.620x349.h1kc5m.png/1580792677315.jpg" class="card-img-top" alt="..."/>
        <h5 class="card-title">Victoria Falls,Zimbabwe</h5>
        <h6>10 days<br/></h6>
        <p class="card-text">$3,356</p>
        <Button className="Button" variant="success">See More</Button>
        <br/>
    </div>
    </Col>
    </Row>


  </div>

   
  );
}

export default AboutUs;
