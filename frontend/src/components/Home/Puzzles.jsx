import React from 'react';
import "./Puzzles.css";
import puzzles from "../pictures/puzzles.jpg";

const Puzzles = () => {
  return (
<div style={{overflowY:"scroll"}}>
      <img src={puzzles} className="image" id="floating" alt="homeimg" /><div class="puzzle__container">
    <div class="row">
        <span class="text1">Welcome Onboard!</span>
        <span class="text2">Unleash The Best Potential.</span>
    </div>
    </div>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Front Side</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
</div>
    
  )
}

export default Puzzles
