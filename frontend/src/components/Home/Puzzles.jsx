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
                 <h2 class="text">What is this platform about?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Who should use this platform ?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Are services free to use?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Who should take an online course?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Back Side</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Are there any prerequisite or language requirements?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">There are no prerequisites. Our courses are open to everyone who is interested in learning. All courses are conducted in English, thus we suggest learners to be proficient in English.</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">How do I apply for a position?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Visit Jobs page and view our current open positions. After reviewing the requirements, if your skills meet the specific requirements for one or more positions, please click “Apply for this Job” and complete all fields on the application. If no position meets your current interest, you can Submit Resume to us for future consideration.</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">How should I prepare for my interview</h2>
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
