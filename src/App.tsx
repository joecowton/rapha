import React from 'react';
import Banner from './components/banner/Banner';

import * as S from './App.styles';
import Main from './components/main/Main';
import ProductBar from './components/productBar/ProductBar';

const App: React.FC = () => {
  return (
    <S.App>
      <Banner />
      <ProductBar />
      <Main />
    </S.App>
  );
};

export default App;
