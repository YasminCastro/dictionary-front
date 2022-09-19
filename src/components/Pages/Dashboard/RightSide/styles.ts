import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;
export const Container = styled.div``;

export const WordContainer = styled.div`
  width: 100%;

  max-width: 500px;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 120px 0px;

  border: 1px solid black;
  background: ${colors.blue100};
`;

export const PlayerContainer = styled.div`
  margin-top: 24px;
`;

export const MeaningsContainer = styled.div`
  margin-top: 24px;

  p {
    margin: 12px 0px;
  }
`;

export const ButtonsContainer = styled.div`
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
    }
  }
`;
