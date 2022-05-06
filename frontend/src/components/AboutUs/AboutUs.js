import React from 'react';
import './AboutUs.css';
import Img from '../../Asset/home-img.svg';

function AboutUs() {
  return (
    <div className='bodyy' id="AboutUs">
        <div class="containerr">
        <section class="home">
        <div class="content">
            <h3>E-learning is a better way of learning</h3>
            <p>Learn , Explore and Engage yourself with one - on -mentorship Support.</p>
            <p>Dive Deep to know about our Project :)</p>
            
        </div>
        <div class="image">
            <img src={Img} alt=""></img>
        </div>
        </section>
        </div>
    </div>
  )
}

export default AboutUs