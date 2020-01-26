import React from 'react';
import Banner from './components/banner/Banner';
import Carousel from './components/carousel/Carousel';
import ProductBar from './components/productBar/ProductBar';
import DetailSection from './components/detailSection/DetailSection';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';

import * as S from './App.styles';
import Menu from './components/menu/Menu';
import { Context } from './ContextProvider';

const App: React.FC = () => {
  const { setMenuOpen } = React.useContext(Context);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <S.App>
      <Banner />
      <ProductBar />
      <Menu />
      <Carousel />
      <DetailSection />
      <Features />
      <Footer />
    </S.App>
  );
};

export default App;
