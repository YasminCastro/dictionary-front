import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  padding: 6px;

  max-height: 600px;
  max-width: 800px;

  overflow-y: scroll;
`;

export const TableContainer = styled.div`
  border: 1px solid black;
  columns: 4 auto;
  column-rule-style: solid;
  column-rule-width: 1px;
`;

export const WordContainer = styled.div`
  width: 100%;
  padding: 8px 6px;
  display: flex;
`;
