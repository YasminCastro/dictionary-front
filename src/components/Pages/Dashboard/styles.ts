import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 30px;

  width: 100%;

  margin: 64px 100px;

  @media (max-width: 1500px) {
    margin: 32px 50px;
  }
`;
