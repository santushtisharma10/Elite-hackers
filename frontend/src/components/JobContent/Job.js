import "./Job.css";
import Header from "./Header.jsx";
import JobLists from "./JobLists";
import JobDetails from "./JobDetails";
import { Routes, Route, Navigate } from "react-router-dom";

function Job() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<JobLists />} />
        <Route path="/jobs/:position" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default Job;