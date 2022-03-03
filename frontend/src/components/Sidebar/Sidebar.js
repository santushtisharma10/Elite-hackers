import React from 'react'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GestureIcon from '@material-ui/icons/Gesture';
import EmojiSymbolsRoundedIcon from '@material-ui/icons/EmojiSymbolsRounded';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sideBar">
            <div className='logo'>Elite Hackers</div>
            <div className="upperSection"> 
                <div><MenuBookIcon />  &nbsp; <Link to="/courses">Courses</Link></div>
                <div> <WorkIcon />  &nbsp; <Link to="/jobs">Jobs</Link></div>
                <div><AssignmentIndIcon />  &nbsp;<Link to="/mentors">Mentors</Link></div>
                <div><GestureIcon />  &nbsp; <Link to="/discussion">Discussion</Link></div>
                <div><EmojiSymbolsRoundedIcon /> &nbsp; <Link to="/webinars">Talks and Webinars</Link></div>
            </div>
            <div className="lowerSection">  
            <div> Upgrade to pro for more features 
            <button class="button">Upgrade</button>
            </div></div>
        </div>
    )
}

export default Sidebar