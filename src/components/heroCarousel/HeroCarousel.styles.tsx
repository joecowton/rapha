import styled from 'styled-components/macro';
import { device } from '../../styles/media';

export const Image = styled.img`
  img {
    height: 100%;
    width: 100%;
  }

  @media ${device.md} {
    padding: 10px 0 0;
  }
`;
