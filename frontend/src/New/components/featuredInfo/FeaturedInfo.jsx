import "./featuredInfo.css";
import logo from "../pictures/php-logo.jpg";
import logo1 from "../pictures/python-logo.png";
import logo2 from "../pictures/digitalmarket.jpg";
import logo3 from "../pictures/figma-logo-2_4x.webp";

export default function FeaturedInfo() {
  return (
    <div>
    <div className="topheader">Learn New Skills</div>
    <div className="featured">
      <div className="featuredItem">
        <div>
          <img src={logo} className="img" alt="" />
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">PHP Development</span>
          <span className="featuredMoneyRate">
            12+ Videos 
          </span>
        </div>
        <button className="featuredSub">Learn More </button>
      </div>
      <div className="featuredItem">
      <div>
          <img src={logo1} className="img" alt="" />
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Python Programming</span>
          <span className="featuredMoneyRate">
            15+ Videos 
          </span>
        </div>
        <button className="featuredSub">Learn More </button>
      </div>
      <div className="featuredItem">
      <div>
          <img src={logo2} className="img" alt="" />
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Digital Marketing</span>
          <span className="featuredMoneyRate">
            20+ Videos 
          </span>
        </div>
        <button className="featuredSub">Learn More </button>
      </div>
      <div className="featuredItem">
      <div>
          <img src={logo3} className="img" alt="" />
        </div>
        <br></br><br></br>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Figma with UI/UX Design</span>
          <span className="featuredMoneyRate">
            13+ Videos 
          </span>
        </div>
        <button className="featuredSub">Learn More </button>
      </div>
    </div>
    </div>
  );
}
