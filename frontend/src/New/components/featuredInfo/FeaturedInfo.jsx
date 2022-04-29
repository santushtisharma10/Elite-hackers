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
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo3} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Figma with UI/UX Design</div>
          </div>
        </div>
        </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo2} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Learn Digital Marketing </div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo1} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Excel With Python Programming</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Grow your career with PHP programming</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
