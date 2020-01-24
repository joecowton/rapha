import React from 'react';

import * as S from './AddToBasket.styles';

export default () => (
  <S.AddToBasket>
    <S.Section>
      <S.Price>£320.00</S.Price>
      <S.ButtonWrapper>
        <S.Button>Add to basket</S.Button>
      </S.ButtonWrapper>
    </S.Section>
    <S.Links>
      <S.Wishlist>Add To Wishlist</S.Wishlist>
      <S.SizeGuide>Size Guide</S.SizeGuide>
    </S.Links>
  </S.AddToBasket>
);
