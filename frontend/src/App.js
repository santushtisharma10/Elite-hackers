import './App.css';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Timeline from './components/Home/Timeline';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/login/new" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/timeline" element={<Timeline />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
