import React from 'react';

import ProductCarousel from '../productCarousel/ProductCarousel';

import * as S from './DetailSection.styles';
import AddToBasket from '../addToBasket/AddToBasket';

const options = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'x-large', label: 'X-Large' },
  { value: 'xx-large', label: 'XX-Large' }
];

const defaultValue = { value: 0, label: 'Please Select' };

export default () => (
  <S.DetailSection>
    <S.Heading>PRO TEAM INSULATED GORE-TEX JACKET</S.Heading>
    <S.SubHeading>
      The ultimate waterproof jacket for the coldest, wettest conditions.
    </S.SubHeading>
    <S.ColumnWrapper>
      <ProductCarousel />
    </S.ColumnWrapper>
    <S.SelectWrapper>
      <S.StyledSelect options={options} defaultValue={defaultValue} />
    </S.SelectWrapper>
    <S.Section>
      <AddToBasket />
    </S.Section>
  </S.DetailSection>
);
