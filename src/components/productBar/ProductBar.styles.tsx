import styled from 'styled-components';
import { device } from '../../styles/media';

export const ProductBar = styled.div`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;
  display: flex;
`;

export const Inner = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  padding: 0 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  padding: 1rem 2rem;
  min-width: 6rem;
  height: 4.5rem;
  text-transform: uppercase;
  width: 16rem;

  &:hover {
    border: 1px solid ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.pink};
  }
`;

export const Price = styled.h3`
  ${props => props.theme.gridStyles.getColStyles(2, 2, 2)}
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.4px;
  margin: 0;
  display: none;

  @media ${device.md} {
    font-size: 2.4rem;
    display: block;
  }
`;

export const Title = styled.h3`
  ${props => props.theme.gridStyles.getColStyles(6, 9, 9)}
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.4px;
  margin: 0;

  @media ${device.md} {
    font-size: 2.4rem;
  }
`;
