import styled from 'styled-components';

export const Item = styled.div`
  ${props => props.theme.gridStyles.getColStyles(12, 4, 4)}
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Copy = styled.p`
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: 0.4px;
`;
