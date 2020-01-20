import React from 'react';
import Image from '../image/Image';
import Slider from 'react-slick';

import * as S from './Main.styles';

const imageOne = `https://i8.amplience.net/i/rapha/PGW01XX_BLK_H2-19_Womens-Pro-Team-Lightweight-GORE-TEX-Jacket_Black_Macro-Details_1?fmt.jpeg.interlaced=true&sm=aspect&scaleFit=poi&poi={($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.x},{($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.y},{($this.metadata.pointOfInterest.w==0)?0:$this.metadata.pointOfInterest.w},{($this.metadata.pointOfInterest.h==0)?0:$this.metadata.pointOfInterest.h}}&aspect=3:2&w=600`;
const imageTwo = `https://i8.amplience.net/i/rapha/PPG01XX_BLK_H2-19_Pro-Team-Lightweight-GORE-TEX-Jacket_Black_Macro-Details_5?fmt.jpeg.interlaced=true&sm=aspect&scaleFit=poi&poi={($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.x},{($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.y},{($this.metadata.pointOfInterest.w==0)?0:$this.metadata.pointOfInterest.w},{($this.metadata.pointOfInterest.h==0)?0:$this.metadata.pointOfInterest.h}}&aspect=3:2&w=600`;
const imageThree = `https://i8.amplience.net/i/rapha/PGW01XX_BLK_H2-19_Womens-Pro-Team-Lightweight-GORE-TEX-Jacket_Black_Macro-Details_5?fmt.jpeg.interlaced=true&sm=aspect&scaleFit=poi&poi={($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.x},{($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.y},{($this.metadata.pointOfInterest.w==0)?0:$this.metadata.pointOfInterest.w},{($this.metadata.pointOfInterest.h==0)?0:$this.metadata.pointOfInterest.h}}&aspect=3:2&w=600`;

export default () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return null;
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return null;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <S.NextArrow />,
    prevArrow: <S.PrevArrow />
  };

  return (
    <S.Main>
      <S.MainInner>
        <Slider {...settings}>
          <Image source={imageOne} />
          <Image source={imageTwo} />
          <Image source={imageThree} />
          <Image source={imageOne} />
          <Image source={imageTwo} />
          <Image source={imageThree} />
          <Image source={imageOne} />
          <Image source={imageTwo} />
          <Image source={imageThree} />
        </Slider>
      </S.MainInner>
    </S.Main>
  );
};
