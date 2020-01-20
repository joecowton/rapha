import styled from 'styled-components';

export const Banner = styled.div``;

export const LogoWrapper = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}

  display: flex;
  justify-content: center;
  padding: 20px 0 15px;
`;
