import React from "react";
import profilepic from "../assets/a1.jpg";
import profilepic2 from "../assets/a2.jpg";
import profilepic3 from "../assets/a3.jpg";
import "../components/style.css";
import logo from "../assets/yoboshu-logo.png";

import Slider from "react-slick";
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function header() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slide",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="container-fluid bg-1">
        <div className="row">
          <div class="container mt-5">
            <div class="row pt-3">
              <div className="logo">
                <img src={logo} alt="" />
              </div>

              <div class=" col-lg-4 pic-div">
                <div className="slider">
                  <Slider {...settings}>
                    <img className="profile-pic" src={profilepic2} alt="" />
                    <img className="profile-pic" src={profilepic} alt="" />

                    <img className="profile-pic" src={profilepic3} alt="" />
                  </Slider>
                </div>
              </div>

              <div class=" col-lg-7 ">
                <div className="row">
                  <div className="col-lg-12 white-space-1">
                    <h1 class="name">
                      Cristian
                      <br /> <span className="last-name">Baron</span>
                    </h1>
                    <span className="certified">
                      <i class="fas fa-shield-check"></i>
                      Certified
                    </span>
                  </div>
                </div>
                <div className="row text-section ">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-9 pl-4 ">
                    <div className="about-div ">
                      <h3 className="heading-style">About</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="expertise">
                      <h4 className="heading-style">My Expertise</h4>
                      <button>GYM</button>
                      <button>CARDIO</button>
                      <button>BOXING</button>
                      <button>HIIT</button>
                    </div>
                    <div className="location">
                      <h4 className="heading-style">My Loaction</h4>
                      <span>
                        <i class="fas fa-map-marker-alt"></i> New Delhi
                      </span>
                    </div>
                    <div className="location">
                      <h4 className="heading-style">Mode of Tranining</h4>
                      <span>
                        <i class="fas fa-home-heart"></i> In home
                      </span>
                      <span>
                        <i class="fas fa-tree"></i> Outdoors
                      </span>
                    </div>
                    <div className="certification">
                      <h4 className="heading-style">Certification</h4>
                      <span>GGFI - Golds Gym Fitness Institute</span>
                    </div>
                  </div>
                  <div className="col-lg-12 py-4 detail">
                    <span>₹ 300 per session</span>
                    <span className="pl-4"> 3+ years of Experience</span>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
