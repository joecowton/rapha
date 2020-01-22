import React from 'react';
import logo from '../../assets/logo.svg';
import Hamburger from 'react-hamburgers';

import * as S from './Banner.styles';

export default () => {
  const [active, setActive] = React.useState(false);

  return (
    <S.Banner>
      <S.Inner>
        <S.ItemsLeft>
          <S.BurgerWrapper active={active}>
            <Hamburger
              type="vortex"
              active={active}
              onClick={() => setActive(!active)}
            />
          </S.BurgerWrapper>
          <S.IconWrapper>
            <S.StyledSearch />
          </S.IconWrapper>
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
        </S.ItemsRight>
      </S.Inner>
    </S.Banner>
  );
};
