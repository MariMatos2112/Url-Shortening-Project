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
          margin-right: 10px;
          :hover {
            filter: grayscale(0);
          }
        }

        span:last-child{
          margin-top: 5px;
          color: hsl(180, 66%, 49%);
        }
      }
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid hsl(180, 66%, 69%);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: hsl(180, 66%, 69%) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
