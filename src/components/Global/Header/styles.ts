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
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  margin-left: 32px;

  gap: 8px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;
