import "./featuredInfo.css";
import logo from "../pictures/img1.PNG";
import logo1 from "../pictures/img3.PNG";
import logo2 from "../pictures/img4.PNG";
import logo3 from "../pictures/img5.PNG";

export default function FeaturedInfo() {
  return (
    <div>
    <div className="topheader">What's in store for you</div>
    
    <div className="featured">
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo3} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Get Your ATS friendly resume.</div>
          </div>
        </div>
        </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo2} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Grow and Prosper Your Business with us. </div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo1} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details"> Acquire the services to get hired!</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      <div class="uppercard">
          <div class="imgBx">
          <img src={logo} className="img" alt="" />
          </div>
          <div class="card_content">
            <div class="details">Get Trained in best industry courses.</div>
          </div>
        </div>
      </div>
      <div className="featuredItem">
      </div>
    </div>
    </div>
  );
}
