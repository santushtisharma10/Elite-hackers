import React from 'react';
import './Mentor.css';
import img1 from '../../Asset/svg1.jpg';
import img3 from '../../Asset/computer-courses.png';
import img4 from '../../Asset/brainbooster.png';
import img5 from '../../Asset/discussion.png';
import img6 from '../../Asset/help.png';
import img7 from '../../Asset/book.png';
import img8 from '../../Asset/d1.png';

function MentorCard() {
  return (
    <div className="mentor_main">

	<div className='lower_main'>
	{/* <!-- Some Popular Subjects --> */}
	<div className="title">
		<span>Enhance your skills</span>
	</div>
	<div className="course">
		<center><div class="cbox">
		<div class="det"><img src={img7}></img>Self Paced Learning</div>
		<div class="det"><img src={img8}></img>Mentoship Support</div>
		</div></center>
	</div>


	{/* <!-- SERVICES --> */}
	<div class="service-swipe">
		<div class="diffSection" id="services_section">
		</div>
		<a href="/course"><div class="s-card"><img src={img3}></img><p>Online Courses</p></div></a>
		<a href="/books"><div class="s-card"><img src={img4}></img><p>Popular books and resources</p></div></a>
		<a href="/chat"><div class="s-card"><img src={img5}></img><p>Discussion with Mentors</p></div></a>
	</div>
	<br />
	<br />
	</div>

      {/* <!-- Navigation Bar --> */}
	<header id="mentor_header">
		<div class="mentor_head-container">
			<div class="mentor_quote">
				<p>The beautiful thing about learning is that nobody can take it away from you</p>
				<h5>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</h5>
			</div>
			<div class="mentor_svg-image">
				<img src={img1} className="img-fluid animated" id="floating" alt="svg"></img>
			</div>
		</div>
	</header>
	
	{/* <div className='lower_main'>
	{/* <!-- Some Popular Subjects --> */}
	{/* <div className="title">
		<span>Enhance your skills</span>
	</div>
	<div className="course">
		<center><div class="cbox">
		<div class="det"><img src={img7}></img>Self Paced Learning</div>
		<div class="det"><img src={img8}></img>Mentoship Support</div>
		</div></center>
	</div> */} 


	{/* <!-- SERVICES --> */}
	{/* <div class="service-swipe">
		<div class="diffSection" id="services_section">
		<center><p>Services</p></center>
		</div>
		<a href="/course"><div class="s-card"><img src={img3}></img><p>Online Courses</p></div></a>
		<a href="/books"><div class="s-card"><img src={img4}></img><p>Popular books and resources</p></div></a>
		<a href="/chat"><div class="s-card"><img src={img5}></img><p>Discussion with Mentors</p></div></a>
	</div>
	<br />
	<br />
	</div> */}

	<marquee direction="left" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="5"><div class="marqu">“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” “Your attitude, not your aptitude, will determine your altitude.” “If you think education is expensive, try ignorance.” “The only person who is educated is the one who has learned how to learn …and change.”</div></marquee>
    </div>
  )
}

export default MentorCard