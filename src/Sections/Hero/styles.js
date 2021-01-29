import styled from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 55%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 120px;
    height: 50%;

    h1 {
      font-size: 3.5rem;
      line-height: 60px;
    }

    p {
      color: hsl(0, 0%, 75%);
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  }

  img {
    width: 45%;
    height: 70%;
  }
`;
