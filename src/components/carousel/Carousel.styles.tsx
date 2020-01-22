import styled from 'styled-components';
import { device } from '../../styles/media';

export const Carousel = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100%;
  position: relative;

  &:hover {
    cursor: grab;
  }

  .slick-slider {
    width: 100%;
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
  display: flex;
  justify-content: center;

  .slick-dots li {
    margin: 0;
  }

  @media ${device.md} {
    ${props => props.theme.gridStyles.getContainerStyles()}

    opacity: 1;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(50% - 20px);
  right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(50% - 20px);
  left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  img {
    height: 100%;
    width: 100%;
  }

  @media ${device.md} {
    padding: 10px 0 0;
  }
`;
