import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  background: white;
  border: 1px solid black;
  padding: 15px;
`;

export const WordContainer = styled.div`
  width: 100%;

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

export const MeaningsContainer = styled.div<{ isFavoriteWord: boolean }>`
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      height: 20px;

      color: ${(props) =>
        props.isFavoriteWord ? colors.yellow : colors.black};

      &:hover {
        color: ${colors.yellow};
        cursor: pointer;
      }
    }
  }

  p {
    margin: 12px 0px;
  }
`;
