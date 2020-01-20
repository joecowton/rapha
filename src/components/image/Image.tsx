import React from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './Image.styles';

interface Props {
  source: string;
}

export default ({ source }: Props) => (
  <S.Image>
    <Fade left>
      <img src={source} />
    </Fade>
  </S.Image>
);
