import './App.css';
import {BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/login/new" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
