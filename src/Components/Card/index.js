import React from "react";
import { StyledCard } from "./styles";

const Card = ({ icon, title, description, order }) => {
  return (
    <StyledCard order={order}>
      <div className="IconContainer">
        <img src={icon} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </StyledCard>
  );
};

export default Card;
