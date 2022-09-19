import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 84x;

  top: 0;

  background: ${colors.blue100};

  display: flex;
  justify-content: center;

  @media (max-width: 1340px) {
    padding: 0 24px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 8px 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 460px) {
    padding: 4px 0px;
  }
`;

export const HeaderLeft = styled.div`
  margin-left: 32px;

  gap: 8px;

  > a {
    color: ${colors.purple600};
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    display: flex;
    gap: 16px;
    align-items: center;
  }

  @media (max-width: 460px) {
    margin-left: 12px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  > button {
    border: none;
    cursor: pointer;

    background: transparent;

    font-size: 18px;
    line-height: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;

    color: ${colors.purple600};

    transition: color 0.2s linear;

    &:hover {
      text-decoration: underline;
      color: ${colors.blue400};
    }
  }
`;
