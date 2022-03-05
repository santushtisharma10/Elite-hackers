import React from 'react';
import Navbar from "./Navbar";
import "./Home.css";
import image from "../pictures/LandingImage.png";
import ideas from "../pictures/ideas.png";
import interest from "../pictures/interest.png";
import growth from "../pictures/growth.png";
import business from "../pictures/business.png";
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <><Navbar />
    <section id="header">
    <div className='container-fluid nav_bg'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
            <h1 id="caption">Accelerate your learning with a 1-on-1 mentor </h1>
            <h2 id ="sub-caption" className='my-3'>Strong mentorship feedback from world class mentors to have learning and leveraging the skills needed to lead</h2>
          <div className='mt-3'>
            <NavLink to="/service" className="btn-get-started" id="btn">Get Started</NavLink>
          </div>
          </div>
          <div className='col-lg-6 order-1 order-lg-2 header-img'>
            <img src={image} className="img-fluid animated" id="floating" alt="homeimg" />
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <div id="heading">Invest In Skills, Grow your Future !</div>
    <section id="banner">
    <div className='container'>
      <div className='row'>
      <div className='col-md-3 col-sm-6 col-xs-12'>
          <img src={ideas} className="img-fluid animated" id="banner-item" alt="homeimg" />
          <div className='mt-3'>
            <NavLink to="" className="btn-get-started" id="text">Give wings to your ideas</NavLink>
          </div>
      </div>
      <div className='col-md-3 col-sm-6 col-xs-12'>
          <img src={interest} className="img-fluid animated" id="banner-item" alt="homeimg" />
          <div className='mt-3'>
            <NavLink to="" className="btn-get-started" id="text">Channelize your interests</NavLink>
          </div>
      </div>
      <div className='col-md-3 col-sm-6 col-xs-12'>
          <img src={growth} className="img-fluid animated" id="banner-item" alt="homeimg" />
          <div className='mt-3'>
            <NavLink to="" className="btn-get-started" id="text">Take Forward your career</NavLink>
          </div>
      </div>
      <div className='col-md-3 col-sm-6 col-xs-12'>
          <img src={business} className="img-fluid animated" id="banner-item" alt="homeimg" />
          <div className='mt-3'>
            <NavLink to="" className="btn-get-started" id="text">Establish a business</NavLink>
          </div>
      </div>
      </div>
    </div>
      </section>
      
      </>
     
  )
}

