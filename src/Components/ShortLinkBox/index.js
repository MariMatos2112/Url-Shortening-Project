import React from "react";
import { StyledShortLinkBox } from "./styles";
import Button from "../Button";

const ShortLinkBox = () => {
  return (
    <StyledShortLinkBox>
      <input placeholder="Shorten a link here..." />
      <Button label="Shorten It!" />
    </StyledShortLinkBox>
  );
};

export default ShortLinkBox;
