import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  padding: 10px;

  height: 400px;
  max-width: 800px;

  overflow-y: scroll;
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 180px 180px 180px;

  @media (max-width: 1360px) {
    grid-template-columns: 130px 130px 130px 130px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 130px 130px 130px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 130px 130px 130px 130px;
  }

  @media (max-width: 610px) {
    grid-template-columns: 130px 130px 130px;
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
