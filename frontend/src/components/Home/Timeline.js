import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div>
        <section class="timeline-section">
        <div class="timeline-items">
        
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                    <div class="timeline-content">
                    <h3>Connect with the perfect mentor</h3>
                    <p >We will connect you with trained mentors, perfectly suited to your skills. </p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                
                <div class="timeline-content">
                    <h3>Make Daily Progress</h3>
                    <p>Leverage your Daily progress and take a step ahead in your career! </p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                
                <div class="timeline-content">
                    <h3>Accelerate Your business</h3>
                    <p>Find the right motivation, guidance and skills to boost your business profile.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                
                <div class="timeline-content">
                    <h3>Reach Your Goals</h3>
                    <p>Voila! You are now one step ahead. </p>
                </div>
            </div>         
            
        </div>
        </section>
    </div>
  )
}

export default Timeline
