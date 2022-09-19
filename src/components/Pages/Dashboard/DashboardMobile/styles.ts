import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  width: 100%;

  display: none;

  @media (max-width: 550px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  margin: 32px 0px;
`;
