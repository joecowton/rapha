import styled from 'styled-components';
import { device } from '../../styles/media';
import Select from 'react-select';

export const DetailSection = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}

  margin-top: 40px;
  text-align: center;

  @media ${device.md} {
    margin-top: 60px;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;

  @media ${device.md} {
    font-size: 3rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 2rem;
  line-height: 2rem;
  margin: 2rem 0 1.5rem;
  font-weight: 400;

  @media ${device.md} {
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
`;

export const ColumnWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${device.md} {
    margin-top: 50px;
    margin-bottom: 60px;
  }
`;

export const LeftHandColumn = styled.div`
  ${props => props.theme.gridStyles.getColStyles(12, 6, 6)}
`;

export const RightHandColumn = styled.div`
  ${props => props.theme.gridStyles.getColStyles(12, 6, 6)}
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  text-align: left;

  @media ${device.md} {
    width: 40%;
  }

  @media ${device.lg} {
    width: 40%;
  }
`;

export const Section = styled.div`
  max-width: 85rem;
  margin: auto;
`;
