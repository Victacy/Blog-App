import React from 'react'
import  Bokeo from '../images/bokeo.jpg'
import  Vfalls from '../images/vfalls.jpg'
import  Tower from '../images/tower.jpg'




function About1() {
    return (
    
    <div className="card-deck" >
        

        <div className="card" >
        <img className="card-img-top" src={Bokeo} alt=" "/>
        <div className="card-body">
        <h5 className="card-title">Bokeo Nature Reserves,Laos</h5>
        <p className="card-text">&nbsp;7 days  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$8,300</p>
        <p className="card-text">Bokeo Nature Reserve was established in 2004 with the mission to preserve 123.000
         hectares of primary rainforest. This forest is a place of rare biodiversity with animals such as tigers, 
         bears, elephants, chimpanzees, buffalo … and many birds and insects live.</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>

        <div className="card" >
        <img className="card-img-top" src={Vfalls} alt=" "/>
        <div className="card-body">
        <h5 className="card-title">Victoria Falls,Zimbabwe</h5>
        <p className="card-text">&nbsp;3 days  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5,347</p>
        <p className="card-text">Did you know that Victoria Falls was named after the British monarch,
         Queen Victoria by a missionary, David Livingstone, the first white person to set sight on one 
         of the world's seven natural wonders.It is neither the widest nor highest waterfall 
         in the world, but it's the world's largest sheet of falling water, which solidifies this classification.</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>


        <div className="card" >
        <img className="card-img-top" src={Tower} alt=" "/>
        <div className="card-body">
        <h5 className="card-title">Leaning Tower of Pisa,Piazza del Duomo-Italy</h5>
        <p className="card-text">&nbsp;10 days  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$22,453</p>
        <p className="card-text">The leaning tower of Pisa was supposed to be 60 meters tall (196.85 feet). After the 
        lean, however, the highest side of the tower reaches a mere 56.67 meters (about 186 feet), while the lowest 
        side is 55.86m, or 183 feet.</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        </div>
        </div>

        
        
  
</div>

    )
}

export default About1;
