import React from 'react';
import Banner from './components/banner/Banner';
import Carousel from './components/carousel/Carousel';
import ProductBar from './components/productBar/ProductBar';

import * as S from './App.styles';

const App: React.FC = () => {
  return (
    <S.App>
      <Banner />
      <ProductBar />
      <Carousel />
    </S.App>
  );
};

export default App;
