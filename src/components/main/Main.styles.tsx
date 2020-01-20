import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100%;
`;

export const MainInner = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}
`;

export const Dots = styled.div`
  /* background-color: red; */
  &.slick-dots li button::before {
    font-size: 12px;
  }
`;

export const NextArrow = styled.div`
  display: block;
  position: relative;

  &.slick-next::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 3rem;
    height: 3px;
    transform: rotate(45deg);
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.2s;
  }
  &.slick-next::after {
    content: '';
    top: 50%;
    position: absolute;
    width: 3rem;
    height: 3px;
    transform: rotate(-45deg);
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.2s;
  }
  &.slick-next:hover::before {
    top: -40%;
    transform: rotate(35deg);
  }
  &.slick-next:hover::after {
    top: 40%;
    transform: rotate(-35deg);
  }
`;

export const PrevArrow = styled.div`
  display: block;
  position: relative;
  transform: rotate(360deg);

  &.slick-prev::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 3rem;
    height: 3px;
    transform: rotate(-45deg);
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.2s;
  }
  &.slick-prev::after {
    content: '';
    top: 50%;
    position: absolute;
    width: 3rem;
    height: 3px;
    transform: rotate(45deg);
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.2s;
  }
  &.slick-prev:hover::before {
    top: -40%;
    transform: rotate(-35deg);
  }
  &.slick-prev:hover::after {
    top: 40%;
    transform: rotate(35deg);
  }
`;
