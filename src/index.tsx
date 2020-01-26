import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import { ThemeProvider } from 'styled-components';
import ContextProvider from './ContextProvider';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'hamburgers/dist/hamburgers.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <GlobalStyles />
      <App />
    </ContextProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
