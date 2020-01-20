import React from 'react';
import logo from '../../assets/logo.svg';

import * as S from './Banner.styles';

export default () => {
  return (
    <S.Banner>
      <S.LogoWrapper>
        <img src={logo} />
      </S.LogoWrapper>
    </S.Banner>
  );
};
