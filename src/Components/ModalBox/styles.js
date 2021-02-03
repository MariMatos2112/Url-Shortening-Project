import styled from "styled-components";

export const StyledModalBox = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;

  .TextBox {
    width: 45%;
    height: 35%;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-around;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);

    .closeIcon {
      position: absolute;
      width: 30px;
      top: 10px;
      right: 10px;
      filter: grayscale(1);
      transition: filter 0.1s;
      cursor: pointer;

      :hover {
        filter: grayscale(0);
      }
    }

    div {
      display: flex;
      align-items: center;

      img {
        width: 30px;
      }
    }

    .line {
      p {
        margin-right: 15px;
      }
    }

    .links {
      flex-direction: column;

      span {
        color: #3b3054;
      }

      a {
        text-decoration: none;
        color: #000;
        cursor: pointer;
        transition: all 0.1s;

        :hover {
          color: hsl(180, 66%, 49%);
        }
      }

      div {
        p {
          margin-top: 10px;
          margin-right: 15px;
        }

        img {
          filter: grayscale(1);
          transition: filter 0.1s;
          cursor: pointer;
          :hover {
            filter: grayscale(0);
          }
        }
      }
    }
  }
`;
