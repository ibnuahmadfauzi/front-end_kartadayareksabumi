import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="logo-slider py-4 mb-5">
      <Slider {...settings}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/partner/bpn.png"}
            alt="Logo 1"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/partner/ipb.png"}
            alt="Logo 2"
          />
        </div>
        <div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/partner/pemkab_blitar.png"
            }
            alt="Logo 3"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/partner/ub.png"}
            alt="Logo 4"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/partner/ugm.png"}
            alt="Logo 4"
          />
        </div>
        <div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/partner/pemkot_blitar.png"
            }
            alt="Logo 4"
          />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
