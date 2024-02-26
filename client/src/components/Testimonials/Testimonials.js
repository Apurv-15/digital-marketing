import React from "react";
import "./Testimonials.css";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";

const Testimonials = () => {
  const [state] = React.useState([
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
  ]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 150,
    slidesToShow: 3, // Show 3 testimonials at a time
    slidesToScroll: 1,
  };

  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <Slide direction="left">
              <span className="testi">TESTIMONIALS</span>
              <h1 className="what">What Clients Say....</h1>
            </Slide>
          </div>

          <Slider {...settings}>
            {state.map((info) => (
              <div key={info.id}>
                <div className="services__box">
                  <img
                    src={info.image}
                    alt="Testimony"
                    className="testimonyImage"
                  />
                  <div className="services__box-header">{info.starRating}</div>
                  <div className="services__box-p">{info.review}</div>
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
