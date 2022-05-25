import "./featuredInfo.css";
import logo from "../pictures/img1.PNG";
import logo1 from "../pictures/img3.PNG";
import logo2 from "../pictures/img4.PNG";
import logo3 from "../pictures/img5.PNG";

export default function FeaturedInfo() {
  return (
    <div>
    <div className="topheader">Our Investment Thesis and Beliefs </div>
    
    <div className="featured">
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo3} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Every aspiring individual should have a safe place to grow without being judged</div>
          </div>
        </div>
        </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo2} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Organizations are keener than ever to tap into the power of mentoring and human connections</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo1} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details"> Organizations perform even better when they effectively leverage their collective wisdom</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">A platform to facilitate both sharing and learning. Get hired with the ATS-friendly resume</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      </div>
    </div>
    </div>
  );
}