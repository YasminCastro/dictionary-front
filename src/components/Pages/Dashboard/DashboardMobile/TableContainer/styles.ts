import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Container = styled.div``;

export const TableButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div<{ selected: boolean }>`
  border: 1px solid black;

  margin-bottom: 12px;

  padding: 8px;
  background: ${({ selected }) => (selected ? 'transparent' : colors.gray400)};

  :hover {
    cursor: pointer;
  }
`;
