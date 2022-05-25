import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function Chatbot() {
  const steps = [
    {
      id: "Hi",
      message: "Hey! How are you doing today?",
      trigger: "user",
    },
    {
      id: "user",
      user: true,
      trigger: "1",
    },
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
        "We offer one-to-one mentor support, go to Excel with mentor section in the dashboard and get help with your queries!",
      trigger: "2",
    },
    {
      id: "4",
      message:
        "You can upskill yourself in trending technologies: Head to courses in dashboard to explore videos and upskill yourself!",
      trigger: "2",
    },
    {
      id: "5",
      message:
        "Fill the feedback form to let us know how can we help and our team will connect with you!",
    },
  ];

  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#1486ed",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#1486ed",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot recognitionEnable={true} steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default Chatbot;
