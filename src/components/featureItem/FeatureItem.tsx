import React from 'react';
import Fade from 'react-reveal/Fade';

import * as S from './FeatureItem.styles';

interface Props {
  copy: string;
  image: string;
}

export default ({ image, copy }: Props) => (
  <S.Item>
    <Fade>
      <S.Image src={image} />
      <S.Copy>{copy}</S.Copy>
    </Fade>
  </S.Item>
);
