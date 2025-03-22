import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
        "A Dream Vacation Made Reality!" ⭐⭐⭐⭐⭐
        "I can't thank this travel company enough for helping us plan the perfect getaway! The entire process, from booking to the final day of the trip, was seamless. 
        The tour guides were incredibly knowledgeable, and every location we visited was breathtaking. 
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 roundded-2" alt="" />
          <div>
             <h6 className="mb-0 mt-3">Harry</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        "Unforgettable Experience!" ⭐⭐⭐⭐⭐
        "Our trip with this tour company was absolutely unforgettable. The itinerary was well-organized, 
        and we had the chance to explore places we would never have thought of on our own. The customer service was exceptional, 
        always making sure we had everything we needed. 
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 roundded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Pritpal Kaur</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        "Highly Recommend!" ⭐⭐⭐⭐⭐
        "I'm a bit of a travel skeptic, but after this experience, I'm a total fan! The tour was well-paced, 
        and we had enough free time to explore on our own while still seeing all the must-see spots. Plus, the accommodations were top-notch.
        I highly recommend this company to anyone who wants a stress-free, amazing trip."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 roundded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
        "Perfect for Families!" ⭐⭐⭐⭐⭐
        "As a family of five, traveling can be tricky, but this company made it so easy and enjoyable. 
        They offered family-friendly tours that kept everyone entertained, from the youngest to the oldest. 
        The guides were super engaging, and we never felt rushed. We'll be booking another trip soon!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 roundded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
 
    </Slider>
  );
};

export default Testimonials;
