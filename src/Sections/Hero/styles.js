import styled from "styled-components";

export const StyledHero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .MainBox {
    width: 55%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px 120px;
    height: 50%;

    h1 {
      color: hsl(255, 11%, 22%);
      font-size: 3.5rem;
      line-height: 60px;
      margin-bottom: 10px;
    }

    p {
      color: hsl(0, 0%, 75%);
      font-size: 1.2rem;
      margin-bottom: 35px;
    }
  }

  img {
    width: 45%;
    height: 70%;
  }
`;
