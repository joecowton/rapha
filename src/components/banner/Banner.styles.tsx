import styled from 'styled-components/macro';
import Account from '../icons/Account';
import Basket from '../icons/Basket';
import Search from '../icons/Search';

export const Banner = styled.div``;

export const Inner = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 15px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemsRight = styled.div`
  display: flex;
  justify-content: right;
`;

export const ItemsLeft = styled.div`
  display: flex;
  justify-content: right;
`;

export const BurgerWrapper = styled.div<{ active?: boolean }>`
  padding: 10px;
  display: flex;

  button {
    padding: 0;
  }

  .hamburger {
    &:focus {
      outline: 0;
    }
  }

  .hamburger-inner::before {
    top: ${({ active }) => (active ? '0' : '-7px')};
  }
  .hamburger-inner::after {
    top: ${({ active }) => (active ? '0' : '7px')};
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 20px;
    height: 2px;
  }

  .hamburger-box {
    width: 17px;
    height: 17px;
  }
`;

export const IconWrapper = styled.div`
  padding: 10px;
  display: flex;

  &:hover {
    cursor: pointer;

    circle,
    g {
      stroke: ${({ theme }) => theme.colors.pink};
    }

    path {
      fill: ${({ theme }) => theme.colors.pink};
    }
  }
`;

export const StyledAccount = styled(Account)``;

export const StyledBasket = styled(Basket)`
  padding: 10px;
`;

export const StyledSearch = styled(Search)`
  padding: 10px;
`;
