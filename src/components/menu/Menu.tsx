import React from 'react';

import * as S from './Menu.styles';

import { Context } from '../../ContextProvider';

export default () => {
  const { menuOpen } = React.useContext(Context);

  return (
    <S.StyledMenu menuOpen={menuOpen}>
      <S.List>
        <S.ListItem>
          <S.Link href="/">Men</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link href="/">Women</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link href="/">Ride</S.Link>
        </S.ListItem>
        <S.ListItem>
          <S.Link href="/">Stories</S.Link>
        </S.ListItem>
      </S.List>
    </S.StyledMenu>
  );
};
