import React from 'react'
import Hawaii from '../images/hawaii.jpg'
import Badaling from '../images/badaling.jpg'
import  Bora from '../images/bora.jpg'
import About1 from './About1'




function About() {
    return (
    <div className="card-deck" >
        <div className="card" >
        <img className="card-img-top" src={Hawaii} alt=" "/>
        <div className="card-body">
        <h5 className="card-title">Maiu Beach,Hawaii</h5>
        <p className="card-text">&nbsp;15 days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$12,000</p>
        <p className="card-text">Did you know that Maui has more miles of accessible beach than any other 
        island in Hawaii? It’s true. Not only does Maui boast over 80 beaches spanning 30 miles, 
        but they include white, black and the rare red sand beaches.That’s just one of the 
        many interesting qualities that make Maui such a favorite among vacationers and residents, 
        not to mention an amazing place for ocean tours.</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>

        <div className="card" >
        <img className="card-img-top" src={Badaling} alt=" "/>
        <div className="card-body">
        <h5 className="card-title">Great Wall of Badaling,Beijing-China</h5>
        <p className="card-text">&nbsp;5 days  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$8,070</p>
        <p className="card-text">Badaling Great Wall was once the major defensive wall along the 
        rolling mountains that formed the northern frontier of the capital, Beijing. 
        It is now the best-preserved and the most popular section among all.</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>

        <div className="card" >
        <img className="card-img-top" src={Bora} alt=" "/>
        <div className="card-body">
        <h5 className="card-title">Bora Bora Island,Northwest of Tahiti</h5>
        <p className="card-text">&nbsp;&nbsp;&nbsp;6 days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$4,050</p>
        <p className="card-text"> Most people call Bora Bora a romantic island.That’s mainly because it’s a perfect place for couples and honeymooners to crown their love. Starting from the bungalows, private beaches up to the Motus and the lagoon, it’s the kingdom of love.</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>
        

        <About1/>
        

        
        
  
</div>

    )
}

export default About;
