import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 432px;

  margin-top: 32px;
  padding: 12px 16px 16px;

  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px 2px;

  form {
    display: flex;
    flex-direction: column;

    margin-top: 24px;

    > button {
      margin-top: 16px;

      background: ${colors.blue350};

      border: 0;
      border-radius: 8px;

      font-size: 16px;
      line-height: 21px;

      font-weight: bold;
      color: ${colors.white};

      padding: 18px 0;
      transition: background linear 0.3s;

      :hover:enabled {
        background: ${colors.blue700};
      }
    }
  }

  > button {
    color: ${colors.blue350};
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 500px) {
    max-width: unset;
    border-radius: 0;
    margin-top: 8px;
  }
`;
