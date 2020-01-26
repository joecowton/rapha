import styled from 'styled-components/macro';

export const StyledMenu = styled.nav<{ menuOpen: boolean }>`
  ${props => props.theme.gridStyles.getContainerStyles()}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${props => props.theme.colors.white};
  height: calc(100vh - 74px);
  text-align: left;
  position: absolute;
  top: 74px;
  left: 0;
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) =>
    menuOpen ? 'translateX(0)' : 'translateX(-100%)'};

  width: 100%;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 20px 0;
  border-top: 1px solid lightgrey;
`;

export const Link = styled.a`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.4rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: 0;
  text-decoration: none;
  color: ${props => props.theme.colors.black};

  &:hover {
    color: ${props => props.theme.colors.pink};
  }
`;
