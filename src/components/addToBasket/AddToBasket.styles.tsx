import styled, { css } from 'styled-components/macro';
import { device } from '../../styles/media';

const LinkStyles = css`
  font-size: 12px;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: underline;
  cursor: pointer;
  width: 100%;
  float: left;
  text-align: center;

  @media ${device.md} {
    font-size: 14px;
    width: 100%;
  }
`;

export const AddToBasket = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  border-top: 1px solid lightGrey;
  margin-top: 20px;
  flex-direction: column;
  padding: 0 0 20px;

  @media ${device.md} {
    margin-top: 40px;
    padding: 20px 0;
    flex-direction: row-reverse;
  }
`;

export const SizeGuide = styled.div`
  ${LinkStyles}
`;

export const Wishlist = styled.div`
  ${LinkStyles}
  border-right: 1px solid lightgrey;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media ${device.md} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.4px;
  margin: 0;
  text-align: center;
  padding: 10px 0;

  @media ${device.md} {
    ${({ theme }) => theme.gridStyles.getColStyles(2, 2, 2)}
    padding-right: 20px;
    font-size: 2.4rem;
    text-align: right;
    margin-right: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${device.md} {
    width: 16rem;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.6rem;
  padding: 1rem 2rem;
  min-width: 6rem;
  height: 4.5rem;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${device.md} {
    width: 16rem;
  }
`;
