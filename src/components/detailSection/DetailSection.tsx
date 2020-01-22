import React from 'react';
import ProductCarousel from '../productCarousel/ProductCarousel';

import * as S from './DetailSection.styles';

export default () => (
  <S.DetailSection>
    <S.Heading>PRO TEAM INSULATED GORE-TEX JACKET</S.Heading>
    <S.SubHeading>
      The ultimate waterproof jacket for the coldest, wettest conditions.
    </S.SubHeading>
    <S.ColumnWrapper>
      <ProductCarousel />
    </S.ColumnWrapper>
  </S.DetailSection>
);
