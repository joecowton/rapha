import styled from 'styled-components';
import Account from '../icons/Account';
import Basket from '../icons/Basket';
import Search from '../icons/Search';

export const Banner = styled.div``;

export const Inner = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 15px;
`;

export const ItemsRight = styled.div`
  display: flex;
  justify-content: right;
  padding: 20px 0 15px;
`;

export const ItemsLeft = styled.div`
  display: flex;
  justify-content: left;
  padding: 20px 0 15px;
`;

export const IconWrapper = styled.div`
  padding: 10px;

  &:hover {
    cursor: pointer;

    circle,
    g {
      stroke: ${props => props.theme.colors.pink};
    }

    path {
      fill: ${props => props.theme.colors.pink};
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
