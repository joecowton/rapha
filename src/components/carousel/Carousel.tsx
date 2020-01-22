import React from 'react';
import Slider from 'react-slick';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import imageOne from '../../assets/image1.png';
import imageTwo from '../../assets/image2.png';
import imageThree from '../../assets/image3.png';

import * as S from './Carousel.styles';

interface Props {
  onClick?: () => void;
}

export default () => {
  const NextArrow = ({ onClick }: Props) => (
    <S.NextArrow onClick={onClick}>
      <NavigateNextIcon />
    </S.NextArrow>
  );

  const PrevArrow = ({ onClick }: Props) => (
    <S.PrevArrow onClick={onClick}>
      <NavigateBeforeIcon />
    </S.PrevArrow>
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <S.Carousel>
      <S.Inner>
        <Slider {...settings}>
          <S.Image src={imageOne} />
          <S.Image src={imageTwo} />
          <S.Image src={imageThree} />
        </Slider>
      </S.Inner>
    </S.Carousel>
  );
};
