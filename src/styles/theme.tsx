import { css } from 'styled-components/macro';

import { device } from './media';

const colors = {
  grey: '#d3d3d3',
  black: '#000',
  white: '#fff',
  pink: '#f67599'
};

const gridValues = {
  sm: {
    gutter: 2,
    padding: 2,
    maxWidth: '100%'
  },
  md: {
    gutter: 2,
    padding: 2,
    maxWidth: '100%'
  },
  lg: {
    gutter: 2,
    padding: 2,
    maxWidth: '100%'
  }
};

const gridStyles = {
  getContainerStyles: () => {
    return css`
      width: 100%;
      padding-left: ${gridValues.sm.padding}rem;
      padding-right: ${gridValues.sm.padding}rem;
      box-sizing: border-box;

      @media ${device.md} {
        max-width: ${gridValues.md.maxWidth};
        padding-left: ${gridValues.md.padding}rem;
        padding-right: ${gridValues.md.padding}rem;
        margin-left: auto;
        margin-right: auto;
      }

      @media ${device.lg} {
        max-width: ${gridValues.lg.maxWidth};
        padding-left: ${gridValues.lg.padding}rem;
        padding-right: ${gridValues.lg.padding}rem;
        margin-left: auto;
        margin-right: auto;
      }
    `;
  },
  getRowStyles: () => {
    return css`
      display: flex;
      flex-wrap: wrap;
      margin-left: ${0 - gridValues.sm.gutter / 2}rem;
      margin-right: ${0 - gridValues.sm.gutter / 2}rem;

      @media ${device.lg} {
        margin-left: ${0 - gridValues.lg.gutter / 2}rem;
        margin-right: ${0 - gridValues.lg.gutter / 2}rem;
      }
    `;
  },
  getColStyles: (
    sm = 12,
    md = 12,
    lg = 12,
    offsetSm = 0,
    offsetMd = 0,
    offsetLg = 0,
    totalSm = 12,
    totalMd = 12,
    totalLg = 12
  ) => {
    return css`
      box-sizing: border-box;
      padding-left: ${gridValues.sm.gutter / 2}rem;
      padding-right: ${gridValues.sm.gutter / 2}rem;
      flex-basis: ${100 / (totalSm / sm)}%;
      max-width: ${100 / (totalSm / sm)}%;
      margin-left: ${100 / (totalSm / offsetSm)}%;

      @media ${device.md} {
        flex-basis: ${100 / (totalMd / md)}%;
        max-width: ${100 / (totalMd / md)}%;
        margin-left: ${100 / (totalMd / offsetMd)}%;
      }

      @media ${device.lg} {
        padding-left: ${gridValues.lg.gutter / 2}rem;
        padding-right: ${gridValues.lg.gutter / 2}rem;
        flex-basis: ${100 / (totalLg / lg)}%;
        max-width: ${100 / (totalLg / lg)}%;
        margin-left: ${100 / (totalLg / offsetLg)}%;
      }
    `;
  }
};

const fonts = {
  title: [`'Montserrat', sans-serif`],
  body: [`'Work Sans', sans-serif`]
};

const fontWeight = {
  regular: 400,
  bold: 700
};

const fontSizes = {
  button: '1.4rem',
  copy: {
    small: '1.2rem',
    large: '1.6rem'
  },
  header: {
    small: '2rem',
    large: '3rem'
  },
  subHeader: {
    small: '1.8rem',
    large: '2.4rem'
  },
  menu: {
    small: '1.3rem',
    large: '2.4rem'
  }
};

const indexs = {
  arrows: 2,
  nav: 3,
  menu: 4
};

const theme = {
  colors,
  fonts,
  fontWeight,
  fontSizes,
  gridValues,
  gridStyles,
  indexs
};

export default theme;
