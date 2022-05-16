import "./widgetSm.css";
import React from "react";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import { event } from "./event";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

export default function WidgetSm() {
  
  const ATCDropdown = (args) => (
    <ul className="atc-dropdown">
      {args.children.map((link, i) => (
        <li key={i}>{link}</li>
      ))}
    </ul>
  );

  const ATCWrapper = (args) => (
    <a onClick={args.onClick} className="atc-item" href="/">
      {args.children}
    </a>
  );

  const AddToCalendarDropdown = AddToCalendarHOC(ATCWrapper, ATCDropdown);

  return (
    <div className="widgetSm" > 
    <div className="left">     
    <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
      {percentage => (
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      )}
    </ChangingProgressProvider>
    <div className="stats">
      30 days Performance 
      <p>Measure your 30days performance metrics</p>
    </div>
    </div>
    
    <div className="right"> 
    <div className="target">
      Weekly Target
      <p>Get,Set and Track your Weekly Progress</p>
    </div>
    <button>
      <AddToCalendarDropdown
        linkProps={{
          className: "atc-dropdown-title"
        }}
        event={event}
      />
      </button>
        </div>
    </div>
  );
}
