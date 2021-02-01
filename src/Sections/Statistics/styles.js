import styled from "styled-components";

export const StyledStatistics = styled.div`
  height: 110vh;
  background: hsl(257, 7%, 95%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 50px 0;
  justify-content: space-between;

  .TextBox {
    text-align: center;
    width: 38%;

    h2 {
      color: hsl(255, 11%, 22%);
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    p {
      color: hsl(0, 0%, 55%);
    }
  }

  .CardBox {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    position: relative;

    .line {
      width: 80%;
      height: 10px;
      background: hsl(180, 66%, 49%);
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
    }
  }
`;
