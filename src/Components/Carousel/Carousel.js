import React from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    const { children } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return <Slider {...settings}>{children}</Slider>;
  }
}
