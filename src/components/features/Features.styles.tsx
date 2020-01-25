import styled from 'styled-components/macro';
import { device } from '../../styles/media';

export const SectionHeader = styled.div``;

export const Header = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: 20px 0 20px;
`;

export const Gallery = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}
`;

export const ItemList = styled.div`
  ${props => props.theme.gridStyles.getRowStyles()}
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
  }
`;
