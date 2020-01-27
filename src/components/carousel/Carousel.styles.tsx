import styled, { css } from 'styled-components/macro';
import { device } from '../../styles/media';

export const Carousel = styled.div<{ product?: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  position: relative;

  &:hover {
    cursor: grab;
  }

  .slick-slider {
    width: 100%;

    ${props => {
      if (props.product) {
        return css`
          @media ${device.md} {
            width: 60%;
          }

          @media ${device.lg} {
            width: 60%;
          }
        `;
      }
    }}
  }

  .MuiSvgIcon-root {
    opacity: 0;
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.white};
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
    ${({ theme }) => theme.gridStyles.getContainerStyles()}

    opacity: 1;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.indexs.arrows};
  top: calc(50% - 20px);
  right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.indexs.arrows};
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
