import styled from 'styled-components';
import { device } from '../../styles/media';

export const Header = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.header.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: 20px 0 20px;
  padding: 10px 0;

  @media ${device.md} {
    padding: 20px 0 10px;
    font-size: ${({ theme }) => theme.fontSizes.header.large};
    line-height: 3.6rem;
  }
`;

export const Features = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()}
`;

export const Inner = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const ItemList = styled.div`
  flex-direction: column;
  display: flex;
  margin: -10px;

  @media ${device.md} {
    flex-direction: row;
  }
`;
