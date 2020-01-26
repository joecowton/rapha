import styled from 'styled-components/macro';
import { device } from '../../styles/media';

export const Header = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: 20px 0 20px;
  padding: 10px 0;

  @media ${device.md} {
    padding: 20px 0 10px;
    font-size: 2rem;
  }
`;

export const Features = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}
`;

export const Inner = styled.div`
  border-top: 1px solid lightgrey;
`;

export const ItemList = styled.div`
  flex-direction: column;
  display: flex;
  margin: -10px;

  @media ${device.md} {
    flex-direction: row;
  }
`;
