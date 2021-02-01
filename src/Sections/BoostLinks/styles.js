import styled from "styled-components";
import Background from "../../Images/bg-boost-desktop.svg";

export const StyledBoostLinks = styled.div`
  height: 30vh;
  background: url(${Background}) no-repeat;
  background-position: center;
  background-size: cover;
  background-color: hsl(257, 27%, 26%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  justify-content: space-around;

  h2 {
    font-size: 2.5rem;
    color: #fff;
  }
`;
