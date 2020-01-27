import React from 'react';
import Slider from 'react-slick';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import * as S from './Carousel.styles';

interface ArrowProps {
  onClick?: () => void;
}

interface Props {
  children: any;
  product?: boolean;
}

export default ({ children, product }: Props) => {
  const NextArrow = ({ onClick }: ArrowProps) => (
    <S.NextArrow onClick={onClick}>
      <NavigateNextIcon />
    </S.NextArrow>
  );

  const PrevArrow = ({ onClick }: ArrowProps) => (
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
    <S.Carousel product={product}>
      <S.Inner>
        <Slider {...settings}>{children}</Slider>
      </S.Inner>
    </S.Carousel>
  );
};
