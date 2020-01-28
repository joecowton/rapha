import styled from 'styled-components';
import { device } from '../../styles/media';
import Select from 'react-select';

export const DetailSection = styled.div`
  ${({ theme }) => theme.gridStyles.getContainerStyles()}

  margin-top: 40px;
  text-align: center;

  @media ${device.md} {
    margin-top: 60px;
    width: 85rem;
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.header.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 3rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;

  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.header.large};
    line-height: 3.6rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subHeader.small};
  line-height: 2rem;
  margin: 2rem 0 1.5rem;
  font-weight: 400;

  @media ${device.md} {
    font-size: ${({ theme }) => theme.fontSizes.subHeader.large};
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

export const Image = styled.img`
  height: 100%;
  width: 100%;

  @media ${device.md} {
    padding: 10px 0 0;
  }
`;
