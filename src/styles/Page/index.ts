import styled from 'styled-components';
import { colors } from '../GlobalStyles';

export const PageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${colors.white900};
    margin-top: 100px;
  }
`;
