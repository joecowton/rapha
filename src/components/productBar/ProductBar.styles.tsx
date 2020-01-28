import styled from 'styled-components';
import { device } from '../../styles/media';

export const ProductBar = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 70px;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.indexs.nav};
  align-items: center;
  display: flex;
`;

export const Inner = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.6rem;
  padding: 1rem 2rem;
  min-width: 6rem;
  height: 4.5rem;
  text-transform: uppercase;
  width: 16rem;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Price = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.menu.small};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.4px;
  margin: 0;
  display: none;
  text-align: right;
  padding-right: 20px;

  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.menu.large};
    display: block;
  }
`;

export const Title = styled.h3`
  ${({ theme }) => theme.gridStyles.getColStyles(6, 9, 9)}
  font-size: ${({ theme }) => theme.fontSizes.menu.small};
  text-transform: uppercase;
  font-weight:${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.4px;
  padding-left: 0;

  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.menu.large};
    padding-left: 0;
  }
`;
