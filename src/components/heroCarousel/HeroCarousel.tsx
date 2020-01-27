import React from 'react';
import Carousel from '../carousel/Carousel';

import * as S from './HeroCarousel.styles';

import imageOne from '../../assets/image1.png';
import imageTwo from '../../assets/image2.png';
import imageThree from '../../assets/image3.png';

export default () => (
  <Carousel>
    <S.Image src={imageOne} />
    <S.Image src={imageTwo} />
    <S.Image src={imageThree} />
  </Carousel>
);
