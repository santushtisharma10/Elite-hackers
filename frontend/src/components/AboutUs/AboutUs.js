import React from 'react';
import './AboutUs.css';
import Img from '../../Asset/home-img.svg';

function AboutUs() {
  return (
    <div className='bodyy' id="AboutUs">
        <div class="containerr">
        <section class="home">
        <div class="content">
            <h3>Why choose us</h3>
            <p>Organizations create a mentoring program for their employees to increase employee engagement, provide them tools to grow their skills and better manage their career path. Large corporations utilize the power of mentoring to launch strategic initiatives such as Diversity, Equity and Inclusion; Change Management; Career Development and other employee engagement programs. 
              <br />Most organizations start by organically creating a mentoring program and administering it manually using spreadsheets. That works great for sometime, but soon the administration of the mentoring program becomes tedious and reduces effectiveness.</p>
            <p>Dive Deep to know how this Project can help you :)</p>
            
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