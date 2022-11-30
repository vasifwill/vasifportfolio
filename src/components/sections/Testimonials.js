import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Dan DeAlmeida",
    subtitle: "Project Manager at LabVoice",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Johee Chung",
    subtitle: "Team Lead at Omncell",
    review:
      "It was joyfull and to work project with you.  👍",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "Mohammed Soliman",
    subtitle: "Machine Learning Engineer. Previous Teammate",
    review:
      "It was interesting to work with you and make friend like you. 👍",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Feedback from my team" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
