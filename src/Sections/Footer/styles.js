import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: hsl(260, 8%, 14%);
  height: 40vh;
  display: flex;
  padding: 50px 100px;
  justify-content: space-around;

  h4 {
    margin-right: 80px;
    font-size: 2.2rem;
    color: #fff;
  }

  .SocialContainer {
    a {
      margin-right: 30px;

      :last-of-type {
        margin-right: 0;
      }
    }
  }
`;
