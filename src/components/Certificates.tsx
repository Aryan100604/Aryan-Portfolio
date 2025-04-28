import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/Certificates.scss";
import certi1 from "../assets/images/certi1.png";
import certi2 from "../assets/images/certi2.png";
import certi3 from "../assets/images/certi3.png";
import certi4 from "../assets/images/certi4.png";
import certi5 from "../assets/images/certi5.png";

function Certificates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="certificates-container" id="certificates">
      <h1>Certificates</h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="certificate-slide">
            <img src={certi1} alt="certificate" />
          </div>
          <div className="certificate-slide">
            <img src={certi2} alt="certificate" />
          </div>
          <div className="certificate-slide">
            <img src={certi3} alt="certificate" />
          </div>
          <div className="certificate-slide">
            <img src={certi4} alt="certificate" />
          </div>
          <div className="certificate-slide">
            <img src={certi5} alt="certificate" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Certificates;
