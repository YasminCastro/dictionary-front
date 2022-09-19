import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${colors.blue50};

  width: 100%;
  max-width: 100vw;

  bottom: 0;
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 100%;

  padding: 20px 108px;

  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
