import React from 'react';
import './AboutUs.css';
import Img from '../../Asset/home-img.svg';

function AboutUs() {
  return (
    <div className='bodyy'>
        <div class="containerr">
        <section class="home">
        <div class="content">
            <h3>E-learning is a better way of learning</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellat aperiam libero, beatae debitis iusto quia sit aliquid placeat facilis?</p>
            <a href="#" class="btn">Learn More</a>
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