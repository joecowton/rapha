import React from 'react';
import logo from '../../assets/logo.svg';

import * as S from './Banner.styles';

export default () => {
  return (
    <S.Banner>
      <S.Inner>
        <S.ItemsLeft>
          <S.StyledAccount />
        </S.ItemsLeft>
        <S.Logo>
          <img src={logo} />
        </S.Logo>
        <S.ItemsRight>
          <S.IconWrapper>
            <S.StyledAccount />
          </S.IconWrapper>
          <S.IconWrapper>
            <S.StyledBasket />
          </S.IconWrapper>
          <S.IconWrapper>
            <S.StyledSearch />
          </S.IconWrapper>
        </S.ItemsRight>
      </S.Inner>
    </S.Banner>
  );
};
