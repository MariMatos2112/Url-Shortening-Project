import React, { useState, useEffect } from "react";
import { StyledModalBox } from "./styles";
import CheckboxIcon from "../../Images/checkbox-icon.svg";
import CopyIcon from "../../Images/copy-icon.svg";
import CloseIcon from "../../Images/close-icon.svg";
import AlertIcon from "../../Images/alert-circle-icon.svg";

const ModalBox = ({ originalLink, shortenedLink, copyLink, closeModal }) => {
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setFailed(true), 6000);
  }, [setTimeout]);

  const reduceLink = () => {
    const newArray = [];

    if (originalLink.length > 30) {
      const startingArray = originalLink.split("");
      startingArray.forEach((char, index) => {
        if (index < 28) newArray.push(char);
      });
      for (let i = 0; i < 3; i++) {
        newArray.push(".");
      }
    }

    return (
      <a href={originalLink} target="_blank" rel="noreferrer">
        {newArray.join("") || originalLink}
      </a>
    );
  };

  const clickCopyBtn = () => {
    copyLink();
    setCopied(true);
  };

  return (
    <StyledModalBox>
      <div className="TextBox">
        {originalLink ? (
          <>
            <img
              src={CloseIcon}
              alt="Close"
              className="closeIcon"
              onClick={closeModal}
            />
            <div className="line">
              <p>Your link was generated sucessfully!</p>
              <img src={CheckboxIcon} alt="Checkbox" />
            </div>
            <div className="links">
              <p>
                <span>Original link:</span> {reduceLink()}
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
                <img src={CopyIcon} alt="Copy" onClick={clickCopyBtn} />{" "}
                {copied ? <span>Copied!</span> : null}
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            {failed ? (
              <>
                <img
                  src={CloseIcon}
                  alt="Close"
                  className="closeIcon"
                  onClick={closeModal}
                />
                <div className="line">
                  <p>Opss... Something went wrong</p>
                  <img src={AlertIcon} alt="Alert" />
                </div>
              </>
            ) : (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </>
        )}
      </div>
    </StyledModalBox>
  );
};

export default ModalBox;
