import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenuu">
          <h3 className="sidebarTitlee">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/course" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Courses
              </li>
            </Link>
            <br />
            <Link to="/mentorExtra" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                1-1 mentor
              </li>
            </Link>
            <br />
            <Link to="/jobs" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                  Get Hired
              </li>
            </Link>
            <br />
            <br />
            <Link to="/resume" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                  Build Resume
              </li>
            </Link>
            <br />
          </ul>
        </div>

        {/* <div className="sidebarMenu">
        <br />
          <h3 className="sidebarTitlee">Mentor Support</h3>
          <br />
          <ul className="sidebarList">
          <Link to="/products" className="link">            
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </Link>
          <br />
          </ul>
        </div> */}
        {/* <div className="sidebarMenu">
          <br />
          <h3 className="sidebarTitle">Courses</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Browse Courses
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Completed Courses
            </li>
          </ul>
        </div> */}
        <div className="sidebarMenu">
          <br />
          <br />
          <h3 className="sidebarTitle">Miscellaneous</h3>
          <ul className="sidebarList">
          <Link to="/contact" className="link">      
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Give Feedback
            </li>
          </Link>
          <br />
          </ul>
        </div>
      </div>
    </div>
  );
}
