import styled from "styled-components";

export const StyledCard = styled.div`
  width: 30%;
  height: 75%;
  background: #fff;
  padding: 70px 32px 40px 30px;
  border-radius: 10px;
  position: relative;
  margin-top: ${(props) => `${props.order * 50}px`};

  .IconContainer {
    background: hsl(257, 27%, 26%);
    position: absolute;
    top: -40px;
    padding: 20px 25px;
    border-radius: 50%;
  }

  h4 {
    color: hsl(255, 11%, 22%);
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: hsl(0, 0%, 55%);
  }
`;
