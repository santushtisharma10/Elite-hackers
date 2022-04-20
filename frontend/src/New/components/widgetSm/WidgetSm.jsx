import "./widgetSm.css";
import React from "react";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators

const percentage = 66;


export default function WidgetSm() {
  return (
    <div className="widgetSm" >      
      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
      <div className="stats">
        30 days Performance 
      </div>
      <div className="target">
        Weekly Target
      </div>
      <div className="target1">
        Monthly Target
      </div>
      </div>

  );
}
