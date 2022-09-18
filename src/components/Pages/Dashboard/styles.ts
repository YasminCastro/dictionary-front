import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  margin: 64px;

  @media (max-width: 1200px) {
    margin-top: 42px;
  }
`;
