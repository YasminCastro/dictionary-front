import { colors } from '@/styles/GlobalStyles';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 432px;

  margin-top: 32px;
  padding: 12px 16px 16px;

  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;

  h2 {
    font-size: 24px;
    line-height: 36px;

    font-weight: bold;
    color: ${colors.black500};
  }

  form {
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-top: 24px;

    > button {
      position: relative;

      height: 56px;

      margin-top: 16px;
      /* margin-bottom: 16px; */

      background: ${colors.black500};
      border: 0;
      border-radius: 8px;

      font-size: 16px;
      line-height: 21px;

      font-weight: bold;
      color: ${colors.white};

      padding: 18px 0;
      transition: background linear 0.3s;

      :hover:enabled {
        background: ${colors.black500};
      }
    }

    > p {
      align-self: center;

      margin-top: 16px;

      font-size: 16px;
      line-height: 24px;

      font-weight: normal;
      color: ${colors.white800};

      button {
        background-color: transparent;
        border: 0;
        color: ${colors.black500};
        transition: color 0.2s linear;

        font-size: 16px;
        line-height: 24px;

        font-weight: normal;

        :hover {
          color: ${colors.black500};
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 500px) {
    max-width: unset;
    border-radius: 0;
    margin-top: 8px;
  }
`;
