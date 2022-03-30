import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousels.css";
import ideas from "../pictures/ideas.png";
import interest from "../pictures/interest.png";
import growth from "../pictures/growth.png";
import business from "../pictures/business.png";

function Carousels (){
        return (
            <Carousel autoPlay className="car">
                <div className="carousel">
                <img src={ideas} />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="carousel">
                <img src={interest} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel"> 
                <img src={business} />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="carousel">
                <img src={growth} />
                    <p className="legend">Legend 3</p>
                </div>
               
            </Carousel>
        )
    }

export default Carousels;
