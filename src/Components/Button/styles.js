import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 15px 20px;
  background: hsl(180, 66%, 49%);
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  width: 200px;
  font-weight: bold;
  color: white;
  transition: all .1s;

  :hover{
      cursor: pointer;
      background: hsl(180, 46%, 49%);
  }
`;
