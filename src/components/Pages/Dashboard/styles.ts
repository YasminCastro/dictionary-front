import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;

  width: 100%;

  @media (max-width: 1200px) {
    margin-top: 57px;
  }
`;
