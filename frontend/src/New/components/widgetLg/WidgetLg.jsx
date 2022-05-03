import "./widgetLg.css";
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import img1 from "../../pictures/img1.PNG";
import img2 from "../../pictures/img3.PNG";
import img3 from "../../pictures/img4.PNG";
import img4 from "../../pictures/img5.PNG";
import img5 from "../../pictures/jobs.PNG";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <div class="row">
       <div className="row_1">
        <div class="column">
          <div class="card">
          <img src={img1} className="img1" alt="" />
            <h3>Courses</h3>
            <p>
              Get Trained in best industry courses.
            </p>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
          <img src={img2} className="img1" alt="" />
            <h3>Favourites</h3>
            <p>
              Curate your own favourite courses.
            </p>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
          <img src={img3} className="img1" alt="" />
            <h3>Explore</h3>
            <p>
              Explore all the upcoming technology and business related insights.
               </p>
          </div>
        </div>
        </div>
        <br />
        <div className="row_2">
         <div class="column">
          <div class="card">
          <img src={img4} className="img1" alt="" />
            <h3>Resume</h3>
            <p>
              Get your ATS friendly resume.
               </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
          <img src={img5} className="img1" alt="" />
            <h3>Get Hired</h3>
            <p>
              Acquire the services to get hired!
               </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <h3>Explore</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
               </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}