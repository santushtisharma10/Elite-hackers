import React from "react";
import ChatBot from "react-simple-chatbot";

function Chatbot() {
  return (
    <ChatBot
      steps={[
        {
          id: "1",
          message: "What are you looking for today?",
          trigger: "2",
        },
        {
          id: "2",
          options: [
            { value: 1, label: "Upskilling", trigger: "4" },
            { value: 2, label: "Mentoring", trigger: "3" },
            { value: 3, label: "Help", trigger: "5" },
          ],
        },
        {
          id: "3",
          message:
            "We offer different mentor support click on this link to go to mentoring sectiona dn you can find plenty of mentors who can help you with your queries!",
          trigger: "2",
        },
        {
          id: "4",
          message:
            "You can upskill ypurself in following technologies: Follow this link to explore videos!",
          trigger: "2",
        },
        {
          id: "5",
          message:
            "Here is our feedback/grievance section. DO let us know how can we help!",
        },
      ]}
    />
  );
}

export default Chatbot;