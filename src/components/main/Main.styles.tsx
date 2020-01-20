import styled from 'styled-components';

export const Main = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100%;
`;

export const MainInner = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}
`;
