import React from "react";
import Slider from "react-slick";
// import image1 from "../../assets/images/banner-1.jpg";
// import image2 from "../../assets/images/banner-55.jpg";
import image3 from "../../assets/images/bg-banner6.jpg";
import image2 from "../../assets/images/bg-banner5.jpg";
import image1 from "../../assets/images/bg-banner4.jpg";

function BannerSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        <img src={image1} alt="our building" />

        <img src={image2} alt="our building" />

        <img src={image3} alt="our building" />
      </Slider>
    </>
  );
}

export default BannerSlider;
