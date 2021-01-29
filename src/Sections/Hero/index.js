import React from "react";
import Button from "../../Components/Button";
import HeroImg from "../../Images/illustration-working.svg";
import { StyledHero } from "./styles";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button label="Get started" />
      </div>
      <img src={HeroImg} alt="Hero Image" />
    </StyledHero>
  );
};

export default Hero;
