import React from "react";
import { StyledModalBox } from "./styles";
import CheckboxIcon from "../../Images/checkbox-icon.svg";
import CopyIcon from "../../Images/copy-icon.svg";
import CloseIcon from "../../Images/close-icon.svg";

const ModalBox = ({ originalLink, shortenedLink, copyLink, closeModal }) => {
  return (
    <StyledModalBox>
      <div className="TextBox">
        <img src={CloseIcon} alt="Close" className="closeIcon" onClick={closeModal}/>
        <div className="line">
          <p>Your link was generated sucessfully!</p>
          <img src={CheckboxIcon} alt="Checkbox" />
        </div>
        <div className="links">
          <p>
            <span>Original link:</span>{" "}
            <a href={originalLink} target="_blank" rel="noreferrer">
              {originalLink}
            </a>
          </p>
          <div>
            <p>
              <span>Shortened link:</span>{" "}
              <a
                href={`http://${shortenedLink}`}
                target="_blank"
                rel="noreferrer"
              >
                {shortenedLink}
              </a>
            </p>
            <img src={CopyIcon} alt="Copy" onClick={copyLink} />
          </div>
        </div>
      </div>
    </StyledModalBox>
  );
};

export default ModalBox;
