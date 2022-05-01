import "./widgetLg.css";
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

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
            <div class="icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3>Courses</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            </p>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Favourites</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
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
        <br />
        <br />
        
        <div className="row_2">

        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <h3>Resume</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
               </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <h3>Get Hired</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
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