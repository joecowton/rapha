import React from 'react';
import Image from '../image/Image';

import * as S from './Main.styles';

const imageOne = `https://i8.amplience.net/i/rapha/PGW01XX_BLK_H2-19_Womens-Pro-Team-Lightweight-GORE-TEX-Jacket_Black_Macro-Details_1?fmt.jpeg.interlaced=true&sm=aspect&scaleFit=poi&poi={($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.x},{($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.y},{($this.metadata.pointOfInterest.w==0)?0:$this.metadata.pointOfInterest.w},{($this.metadata.pointOfInterest.h==0)?0:$this.metadata.pointOfInterest.h}}&aspect=3:2&w=600`;
const imageTwo = `https://i8.amplience.net/i/rapha/PPG01XX_BLK_H2-19_Pro-Team-Lightweight-GORE-TEX-Jacket_Black_Macro-Details_5?fmt.jpeg.interlaced=true&sm=aspect&scaleFit=poi&poi={($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.x},{($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.y},{($this.metadata.pointOfInterest.w==0)?0:$this.metadata.pointOfInterest.w},{($this.metadata.pointOfInterest.h==0)?0:$this.metadata.pointOfInterest.h}}&aspect=3:2&w=600`;
const imageThree = `https://i8.amplience.net/i/rapha/PGW01XX_BLK_H2-19_Womens-Pro-Team-Lightweight-GORE-TEX-Jacket_Black_Macro-Details_5?fmt.jpeg.interlaced=true&sm=aspect&scaleFit=poi&poi={($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.x},{($this.metadata.pointOfInterest.w==0)?0.5:$this.metadata.pointOfInterest.y},{($this.metadata.pointOfInterest.w==0)?0:$this.metadata.pointOfInterest.w},{($this.metadata.pointOfInterest.h==0)?0:$this.metadata.pointOfInterest.h}}&aspect=3:2&w=600`;

export default () => {
  return (
    <S.Main>
      <S.MainInner>
        <Image source={imageOne} />
        <Image source={imageTwo} />
        <Image source={imageThree} />
        <Image source={imageOne} />
        <Image source={imageTwo} />
        <Image source={imageThree} />
        <Image source={imageOne} />
        <Image source={imageTwo} />
        <Image source={imageThree} />
      </S.MainInner>
    </S.Main>
  );
};
