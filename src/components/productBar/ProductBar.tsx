import React from 'react';

import * as S from './ProductBar.styles';

export default () => {
  return (
    <S.ProductBar>
      <S.Inner>
        <S.Title>Pro team insulated gore-tex jacket</S.Title>
        <S.Price>£320.00</S.Price>
        <S.ButtonWrapper>
          <S.Button>Add to basket</S.Button>
        </S.ButtonWrapper>
      </S.Inner>
    </S.ProductBar>
  );
};
