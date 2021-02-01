import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 15%;
  display: flex;
  padding: 20px 120px;
  justify-content: space-between;

  .LeftBox {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 130px;
      height: auto;
    }

    button {
      border: none;
      color: #bfbfbf;
      background: none;
      font-weight: bold;
      cursor: pointer;
      font-size: 1rem;
    }
  }

  .RightBox {
    display: flex;
    width: 18%;
    align-items: center;
    justify-content: space-between;

    button {
      :first-of-type {
        border: none;
        color: #bfbfbf;
        background: none;
        font-weight: bold;
        cursor: pointer;
        font-size: 1rem;
      }

      :last-of-type {
        width: 120px;
        padding: 10px;
        height: 78%;
      }
    }
  }
`;
