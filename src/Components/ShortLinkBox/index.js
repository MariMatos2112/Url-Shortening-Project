import React, {useRef} from "react";
import { StyledShortLinkBox } from "./styles";
import Button from "../Button";

const ShortLinkBox = ({ getLink }) => {
  const input = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    getLink(input.current.value);
    input.current.value = '';
  }

  return (
    <StyledShortLinkBox onSubmit={onSubmit}>
      <input placeholder="Shorten a link here..." ref={input}/>
      <Button label="Shorten It!" />
    </StyledShortLinkBox>
  );
};

export default ShortLinkBox;
