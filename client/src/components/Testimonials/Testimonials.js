import React from "react";
// import "./Testimonials.css";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      image: profilePic1,
      starRating: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus in nulla fringilla, id iaculis velit varius.nteger in lorem at ipsum gravida aliquet nec quis lorem.",
    },
    {
      id: 2,
      image: profilePic2,
      starRating: "⭐️⭐️⭐️⭐️",
      review:
        "Nulla facilisi. Integer in lorem at ipsum gravida aliquet nec quis lorem. Mauris euismod urna nec lorem malesuada, nec fermentum eros volutpat.",
    },
    {
      id: 3,
      image: profilePic3,
      starRating: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Vestibulum ut scelerisque justo. In hac habitasse platea dictumst. Ut lobortis, libero a pharetra suscipit, eros quam pharetra lectus, vel tincidunt turpis nisi at lorem.",
    },
    {
      id: 4,
      image: profilePic4,
      starRating: "⭐️⭐️⭐️",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus in nulla fringilla, id iaculis velit varius.nteger in lorem at ipsum gravida aliquet nec quis lorem.",
    },
    {
      id: 5,
      image: profilePic5,
      starRating: "⭐️⭐️⭐️⭐️⭐️",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus in nulla fringilla, id iaculis velit varius.nteger in lorem at ipsum gravida aliquet nec quis lorem.",
    },
    {
      id: 6,
      image: profilePic6,
      starRating: "⭐️⭐️⭐️⭐️",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula lectus in nulla fringilla, id iaculis velit varius.nteger in lorem at ipsum gravida aliquet nec quis lorem.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500, // Adjusted speed for a smoother transition
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div className="common">
            <Slide direction="left">
              <span className="testi">TESTIMONIALS</span>
              <h1 className="what">What Clients Say....</h1>
            </Slide>
          </div>

          <Slider {...sliderSettings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="testimonials__box">
                  <img
                    src={testimonial.image}
                    alt="Testimony"
                    className="testimonyImage"
                  />
                  <div className="testimonials__box-header">
                    {testimonial.starRating}
                  </div>
                  <div className="testimonials__box-p">
                    {testimonial.review}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
