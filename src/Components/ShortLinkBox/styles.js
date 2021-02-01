import styled from "styled-components";
import Background from "../../Images/bg-shorten-desktop.svg";

export const StyledShortLinkBox = styled.form`
  display: flex;
  position: absolute;
  bottom: -50px;
  background-color: hsl(257, 27%, 26%);
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px 40px;
  border-radius: 10px;
  justify-content: space-between;
  background-image: url(${Background});
  background-size: cover;

  input {
    width: 80%;
    border-radius: 10px;
    border: none;
    padding: 0 20px;
    color: #8c8c8c;

    :focus {
      outline: none;
    }
  }

  button {
    width: 18%;
    border-radius: 10px;
  }
`;
