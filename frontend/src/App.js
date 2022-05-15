import './App.css';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
// import {Link} from "react-scroll";
import DashboardHome from './New/pages/home/DashboardHome.jsx';
import UserList from './New/pages/userList/UserList';
import NewUser from './New/pages/newUser/NewUser';
import User from './New/pages/user/User';
import ProductList from './New/pages/productList/ProductList';
import Product from './New/pages/product/Product';
import NewProduct from './New/pages/newProduct/NewProduct';
import JobLists from './components/JobContent/JobLists';
import JobDetails from './components/JobContent/JobDetails';
import ResumePage from './components/ResumeContent/ResumePage';
import Puzzles from './components/Home/Puzzles';
import Chatbot from './components/Content/Chatbot';
import MentorCard from './components/Mentors/MentorCard';
import ContactUs from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs';
import ChatMain from './components/Chat/ChatMain';
import Course from './components/Course/Course';
import Book from './components/Book_Components/Book';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/puzzles" element={<Puzzles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/new" element={<Register />} />
          <Route path="/dashboard" element={<DashboardHome />}/>
          <Route path="/dashboard/users" element={<UserList />}/>
          <Route path="/dashboard/user/:userId" element={<User />}/>
          <Route path="/dashboard/newUser" element={<NewUser />}/>
          <Route path="/dashboard/products" element={<ProductList />}/>
          <Route path="/dashboard/product/:productId" element={<Product />}/>
          <Route path="/dashboard/newproduct" element={<NewProduct />}/>
          <Route path="/jobs" element={<JobLists />}/>
          <Route path="/jobs/:position" element={<JobDetails />}/>
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/mentor" element={<MentorCard />}/>
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