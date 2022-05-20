import './App.css';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import {Link} from "react-scroll";
import DashboardHome from './New/pages/home/DashboardHome.jsx';
import JobLists from './components/JobContent/JobLists';
import JobDetails from './components/JobContent/JobDetails';
import ResumePage from './components/ResumeContent/ResumePage';
import Puzzles from './components/Home/Puzzles';
import Chatbot from './components/Content/Chatbot';
import ContactUs from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs';
import ChatMain from './components/Chat/ChatMain';
import Course from './components/Course/Course';
import Book from './components/Book_Components/Book';
import MentorCard from './components/Mentors/MentorCard';
import WidgetSm from './New/components/widgetSm/WidgetSm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/puzzles" element={<Puzzles />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<DashboardHome />}/>
          <Route path="/jobs" element={<JobLists />}/>
          <Route path="/jobs/:position" element={<JobDetails />}/>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/mentorExtra" element={<MentorCard />}/>
          <Route path="/calendar" element={<WidgetSm />}/> 
          <Route path="/resume" element={<ResumePage />}/>
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          <Route path="/chat" element={<ChatMain />}/>
          <Route path="/course" element={<Course />}/>
          <Route path="/books" element={<Book />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;