import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  width: 100%;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;

  justify-content: center;
  gap: 70px;

  width: 100%;

  margin: 64px 100px;

  @media (max-width: 1500px) {
    gap: 30px;

    margin: 32px 50px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
