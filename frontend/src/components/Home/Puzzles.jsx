import React from 'react';
import "./Puzzles.css";
import puzzles from "../pictures/puzzles.jpg";
import Navbar from "./Navbar.jsx";

const Puzzles = () => {
  return (
<div style={{overflowY:"scroll"}} >
    <Navbar />
    <div class="puzzleImg">
      <img src={puzzles} className="image" id="floating" alt="homeimg" /> </div><div class="puzzle__container">

    <div class="faq_row">
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
                <h2 class="text">This platform provides community and mentorship for early stage startup along with resources that can help them thrive the fierce market competition.
</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Who should use this platform ?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Anyone interested in enterpreneurship.</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Are services free to use?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Our platform is free to use.</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">Who should take an online course?</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">Anyone who is curious to learn and explore new things</h2>
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
                <h2 class="text">Visit Jobs page and view our current open positions. After reviewing the requirements, if your skills meet the specific requirements for one or more positions, please click “Apply for this Job” and complete all fields on the application.</h2>
            </div>
        </div>
    </div><br></br>
    <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                 <h2 class="text">How should I prepare for my interview</h2>
            </div>
            <div class="flip-box-back">
                <h2 class="text">You can visit courses section to learn the required technical and non-technical skills for job.</h2>
            </div>
        </div>
    </div><br></br>
    
    
</div>
    
  )
}

export default Puzzles
