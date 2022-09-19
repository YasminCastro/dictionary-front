import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;

  height: 400px;
  max-width: 500px;

  overflow-y: scroll;
  overflow-x: hidden;
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 130px 130px 130px;

  @media (max-width: 400px) {
    grid-template-columns: 130px 130px;
  }
`;

export const WordContainer = styled.div`
  width: 100%;
  padding: 8px 6px;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;

  :hover {
    background: ${colors.blue100};
  }
`;
