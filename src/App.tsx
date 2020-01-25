import React from 'react';
import Banner from './components/banner/Banner';
import Carousel from './components/carousel/Carousel';
import ProductBar from './components/productBar/ProductBar';
import DetailSection from './components/detailSection/DetailSection';
import Features from './components/features/Features';

import * as S from './App.styles';

const App: React.FC = () => {
  return (
    <S.App>
      <Banner />
      <ProductBar />
      <Carousel />
      <DetailSection />
      <Features />
    </S.App>
  );
};

export default App;
