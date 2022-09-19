import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Container = styled.div``;

export const TableButtonContainer = styled.div`
  display: flex;

  gap: 6px;
`;

export const ButtonContainer = styled.div<{ selected: boolean }>`
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  padding: 8px;
  background: ${({ selected }) => (selected ? 'transparent' : colors.gray400)};

  :hover {
    cursor: pointer;
  }
`;
