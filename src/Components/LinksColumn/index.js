import React from "react";
import { StyledLinksColumn } from "./styles";

const LinksColum = ({ title, links }) => {
  return (
    <StyledLinksColumn>
      <h6>{title}</h6>
      {links.map((link) => (
        <a href="#">{link}</a>
      ))}
    </StyledLinksColumn>
  );
};

export default LinksColum;
