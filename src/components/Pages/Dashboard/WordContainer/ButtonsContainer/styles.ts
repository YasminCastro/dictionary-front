import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;
export const Container = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  margin-top: 36px;

  > button {
    border: 0;

    background: transparent;

    font-size: 22px;
    line-height: 32px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    color: ${colors.purple600};

    transition: color 0.2s linear;

    &:hover {
      color: ${colors.blue400};
      cursor: pointer;
    }
  }
`;
