import React from "react";
import Slider from "react-slick";
import { SliderData } from "./TestimonialData";
import "./index.css";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };
  return (
    <div className="testimonial__container">
      <h2 className="heading-secondary">See What Our Clients say about Us💥</h2>
      <Slider {...settings}>
        {SliderData.map((slide) => (
          <div className="testimonial__wrapper" key={slide.alt}>
            <div className="avatar">
              <img
                className="avatar__image"
                src={slide.image}
                alt={slide.alt}
              />
              <h2 className="testimonial__heading">{slide.name}</h2>
              <p>{slide.occ}</p>
            </div>

            <div className="testimonial__data">
              <h2 className="testimonial__heading">{slide.description}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial;
