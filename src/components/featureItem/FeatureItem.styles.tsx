import styled from 'styled-components';
import { device } from '../../styles/media';

export const Item = styled.div`
  ${({ theme }) => theme.gridStyles.getColStyles(12, 4, 4)}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Copy = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.copy.small};
  line-height: 1.8rem;
  letter-spacing: 0.4px;

  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.copy.large};
    line-height: 2.1rem;
  }
`;
