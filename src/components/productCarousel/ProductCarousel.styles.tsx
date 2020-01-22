import styled from 'styled-components';
import { device } from '../../styles/media';

export const ProductCarousel = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  position: relative;

  &:hover {
    cursor: grab;
  }

  .slick-slider {
    width: 80%;
  }

  .MuiSvgIcon-root {
    opacity: 0;
    color: ${props => props.theme.colors.black};
    background: ${props => props.theme.colors.white};
    border-radius: 50%;

    @media ${device.md} {
      font-size: 4rem;
      opacity: 1;
    }
  }
`;

export const Inner = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}
  display: flex;
  justify-content: center;
`;

export const Dots = styled.div`
  &.slick-dots li button::before {
    font-size: 12px;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(50% - 20px);
  right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(50% - 20px);
  left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  padding: 10px 0 0;

  img {
    height: 100%;
    width: 100%;
  }
`;
