import React, { useState, useEffect } from "react";
// import base64_encode from "base-64"
import "./Course.css";

export default function Course() {
  const [courses, setCourses] = useState([])
  // const data = {
  //   Basics: [
  //     {
  //       name: "Modern HTML & CSS From The Beginning (Including Sass)",
  //       image:
  //         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/108400315/original/099ffb830ffa3ce81209f171b2aef2183fd438d8/web-programming-responsive-html-css-website.jpg",
  //       instructor: "Brad Traversy",
  //       description:
  //         "Build modern responsive websites & UIs with HTML5, CSS3 & Sass! Learn Flex & CSS Grid",
  //       price: "₹455",
  //       link: "https://www.udemy.com/course/modern-html-css-from-the-beginning/"
  //     },
  //     {
  //       name: "Web Design for Beginners: Real World Coding in HTML & CSS",
  //       image: "https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
  //       instructor: "Brad Schiff",
  //       description:
  //         "Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!",
  //       price: "₹540",
  //       link:
  //         "https://www.udemy.com/course/web-design-for-beginners-real-world-coding-in-html-css/"
  //     },
  //     {
  //       name: "Bootstrap 4 From Scratch With 5 Projects",
  //       image: "https://symfonycms.sourceforge.io/bootstrap-icons.png",
  //       instructor: "Brad Traversy",
  //       description:
  //         "Master Bootstrap 4 and build 5 real world themes while learning HTML5 semantics & CSS3",
  //       price: "₹540",
  //       link:
  //         "https://www.udemy.com/course/bootstrap-4-from-scratch-with-5-projects/"
  //     }
  //   ],

  //   JavaScript: [
  //     {
  //       name: "The Complete JavaScript Course 2020: From Zero to Expert!",
  //       image:
  //         "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
  //       instructor: "Jonas Schmedtmann",
  //       description:
  //         "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
  //       price: "₹455",
  //       link: "https://www.udemy.com/course/the-complete-javascript-course/"
  //     },
  //     {
  //       name: "JavaScript - The Complete Guide 2020 (Beginner + Advanced)",
  //       image:
  //         "https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg",
  //       instructor: "Maximilian Schwarzmuller",
  //       description:
  //         "Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2020.",
  //       price: "₹455",
  //       link:
  //         "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
  //     },
  //     {
  //       name: "Learn and Understand NodeJS",
  //       image: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png",
  //       instructor: "Anthony Alicea",
  //       description:
  //         "Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.",
  //       price: "₹455",
  //       link: "https://www.udemy.com/course/understand-nodejs/"
  //     }
  //   ],

  //   Frameworks: [
  //     {
  //       name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
  //       image: "https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png",
  //       instructor: "Maximilian Schwarzmuller",
  //       description:
  //         "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
  //       price: "₹455",
  //       link:
  //         "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
  //     },
  //     {
  //       name: "The Complete Angular Course: Beginner to Advanced",
  //       image:
  //         "https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png",
  //       instructor: "Mosh Hamedani",
  //       description:
  //         "The most comprehensive Angular 4 (Angular 2+) course. Build a real e-commerce app with Angular, Firebase and Bootstrap 4",
  //       price: "₹455",
  //       link: "https://www.udemy.com/course/the-complete-angular-master-class/"
  //     },
  //     {
  //       name: "Vue - The Complete Guide (w/ Router, Vuex, Composition API)",
  //       image:
  //         "https://www.clientresourcesinc.com/wp-content/uploads/2018/06/vuejs_logo.png",
  //       instructor: "Maximilian Schwarzmuller",
  //       description:
  //         "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
  //       price: "₹455",
  //       link: "https://www.udemy.com/course/vuejs-2-the-complete-guide/"
  //     }
  //   ],
  //   Security: [
  //     {
  //       name: "AWS VPC Transit Gateway - Hands On Learning!",
  //       image:
  //         "https://www.openlogic.com/sites/openlogic/files/image/2019-07/image-blog-big-data-on-demand-with-mongodb.jpg",
  //       instructor: "Kalyan Reddy Daida",
  //       description:
  //         "Learn AWS VPC Transit Gateway hands on by implementing 3 practical scenarios",
  //       price: "Free",
  //       link:
  //         "https://www.udemy.com/course/aws-vpc-transit-gateway/"
  //     },
  //     {
  //       name: "Security Awareness Campaigns (Lite)",
  //       image:
  //         "https://www.percona.com/blog/wp-content/uploads/2008/02/Finding-the-largest-tables-on-MySQL.jpg",
  //       instructor: "Michael Goedeker",
  //       description:
  //         "This is the lite version of Security Awareness Campaigns and is meant to give you an idea of the full course.",
  //       price: "Free",
  //       link:
  //         "https://www.udemy.com/course/security-awareness-campaigns/"
  //     }
  //   ],
  //   Personality: [
  //     {
  //       name: "20 Free Life Hacks to Inspire You to Excel in Business &Life",
  //       image:
  //         "https://www.openlogic.com/sites/openlogic/files/image/2019-07/image-blog-big-data-on-demand-with-mongodb.jpg",
  //       instructor: "Chris Haroun",
  //       description:
  //         "20 Free Videos to Inspire You to Live Your Life on Your Terms",
  //       price: "Free",
  //       link:
  //         "https://www.udemy.com/course/20-life-hacks-to-inspire-you-to-excel-in-business-life/"
  //     },
  //     {
  //       name: "Change Agility in the Workplace: Become a Change Agent",
  //       image:
  //         "https://www.percona.com/blog/wp-content/uploads/2008/02/Finding-the-largest-tables-on-MySQL.jpg",
  //       instructor: "Colt Steele",
  //       description:
  //         "Become an agent of change by adopting the agility and resilience skills required in the evolving modern workplace.",
  //       price: "Free",
  //       link:
  //         "https://www.udemy.com/course/change-agility-in-the-workplace-become-a-change-agent/"
  //     },
  //     {
  //       name: "Ultimate Goal Setting and Achieving",
  //       image:
  //         "https://www.percona.com/blog/wp-content/uploads/2008/02/Finding-the-largest-tables-on-MySQL.jpg",
  //       instructor: "Colt Steele",
  //       description:
  //         "Learn the secrets of the world's greatest achievers to help you turn your dreams into reality",
  //       price: "Free",
  //       link:
  //         "https://www.udemy.com/course/ultimate-goal-setting-and-achieving/"
  //     }
  //   ],
  //   Databases: [
  //     {
  //       name: "MongoDB - The Complete Developer's Guide 2020",
  //       image:
  //         "https://www.openlogic.com/sites/openlogic/files/image/2019-07/image-blog-big-data-on-demand-with-mongodb.jpg",
  //       instructor: "Maximilian Schwarzmuller",
  //       description:
  //         "Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
  //       price: "₹455",
  //       link:
  //         "https://www.udemy.com/course/mongodb-the-complete-developers-guide/"
  //     },
  //     {
  //       name: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
  //       image:
  //         "https://www.percona.com/blog/wp-content/uploads/2008/02/Finding-the-largest-tables-on-MySQL.jpg",
  //       instructor: "Colt Steele",
  //       description:
  //         "Become an In-demand SQL Master by creating complex databases and building reports through real-world projects",
  //       price: "₹455",
  //       link:
  //         "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/"
  //     }
  //   ]
  // };

  // const defaultState = "Basics";

  // const [category, setCategory] = useState(defaultState);

  // const categoryKeys = Object.keys(data);

  // const categoryClickHandler = (item) => {
  //   setCategory(item);
  // };

  async function fetchCourses() {

    await fetch("https://elitehackers.herokuapp.com/user/udemy", {
      method: "GET",
      headers: {
        "Accept": "application/json, text/plain, /",
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    .then(res => res.json())
    .then(res => {setCourses(res.results); console.log(res.results)})
  }
  useEffect(() => {

    fetchCourses()
  }, [])

  return courses.length > 0 ? (
    <div className="Course">
      <div className="search_bar">
        <h1>Get yourself industry ready ... 👩‍💻</h1>
        <h4 className="tag-line">
          Offering some of the best courses to sharpen your knowledge and build the best potential at just one click.
        </h4>

        {/* <div>
          {categoryKeys.map((item) => (
            <button
              className="category-btns"
              onClick={categoryClickHandler.bind(this, item)}
            >
              {item}
            </button>
          ))}
        </div> */}
      </div>

      <hr />


      <div className="course_list">
        <ul>
          {courses.map((item) => (
            <li>
              <img src={item.image_480x270} alt="img" />
              <h2>{item.title}</h2>
              <p className="coach">
                Course by : <span>{ }</span>
              </p>
              <p>{item.headline}</p>
              <div>
                <h4 className="price">{item.price}</h4>
                <a href={`https://www.udemy.com${item.url}`} target="blank" class="buy-btn">
                  Buy
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ):(
    <div>
      Loading ....
    </div>
  );
}
