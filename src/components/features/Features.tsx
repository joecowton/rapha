import React from 'react';
import FeatureItem from '../featureItem/FeatureItem';

import * as S from './Features.styles';

import imageOne from '../../assets/image8.png';
import imageTwo from '../../assets/image9.png';
import imageThree from '../../assets/image10.png';

export default () => (
  <S.Gallery>
    <S.SectionHeader>
      <S.Header>Features</S.Header>
    </S.SectionHeader>
    <S.ItemList>
      <FeatureItem
        image={imageOne}
        copy="Polartec Alpha® insulation is hydrophobic, lightweight and breathable,
        keeping you warm even when it’s wet."
      />
      <FeatureItem
        image={imageTwo}
        copy="Water beads and rolls off the superlight GORE-TEX SHAKEDRY™ outer
            fabric. No saturated face fabric means no chill."
      />
      <FeatureItem
        image={imageThree}
        copy="GORE-TEX Stretch™ seals out storms at the cuffs, provides an
            aerodynamic fit even with full pockets, and keeps the hood close on
            head down efforts."
      />
    </S.ItemList>
  </S.Gallery>
);
