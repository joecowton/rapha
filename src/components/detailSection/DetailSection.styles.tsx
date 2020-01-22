import styled from 'styled-components';

export const DetailSection = styled.div`
  ${props => props.theme.gridStyles.getContainerStyles()}

  margin-top: 80px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const SubHeading = styled.h3`
  font-size: 2.6rem;
  line-height: 2.6rem;
  margin: 2rem 0 1.5rem;
  font-weight: 400;
`;

export const ColumnWrapper = styled.div`
  margin-top: 60px;
`;

export const LeftHandColumn = styled.div`
  ${props => props.theme.gridStyles.getColStyles(12, 6, 6)}
`;

export const RightHandColumn = styled.div`
  ${props => props.theme.gridStyles.getColStyles(12, 6, 6)}
`;
