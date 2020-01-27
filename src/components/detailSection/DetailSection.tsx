import React from 'react';
import AddToBasket from '../addToBasket/AddToBasket';
import Carousel from '../carousel/Carousel';

import * as S from './DetailSection.styles';

const options = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'x-large', label: 'X-Large' },
  { value: 'xx-large', label: 'XX-Large' }
];

import imageOne from '../../assets/image4.png';
import imageTwo from '../../assets/image5.png';
import imageThree from '../../assets/image6.png';

const defaultValue = { value: 0, label: 'Please Select' };

export default () => (
  <S.DetailSection>
    <S.Heading>PRO TEAM INSULATED GORE-TEX JACKET</S.Heading>
    <S.SubHeading>
      The ultimate waterproof jacket for the coldest, wettest conditions.
    </S.SubHeading>
    <S.ColumnWrapper>
      <Carousel product>
        <S.Image src={imageOne} />
        <S.Image src={imageTwo} />
        <S.Image src={imageThree} />
      </Carousel>
    </S.ColumnWrapper>
    <S.SelectWrapper>
      <S.StyledSelect options={options} defaultValue={defaultValue} />
    </S.SelectWrapper>
    <AddToBasket />
  </S.DetailSection>
);
