import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import CK from "../../CK"
import { SRLWrapper } from "simple-react-lightbox";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <SRLWrapper>
      <Slider {...settings}>
        {CK.map((props) => (
          <Content
            image={props.image}
          />
        ))}
      </Slider>
    </SRLWrapper>
  );
}