import React from "react";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import ShortLinkBox from "../../Components/ShortLinkBox";
import HeroImg from "../../Images/illustration-working.svg";
import { StyledHero } from "./styles";

const Hero = () => {
  return (
    <StyledHero>
      <Navbar />
      <div className="MainBox">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button label="Get started" />
      </div>
      <img src={HeroImg} alt="Hero" />
      <ShortLinkBox />
    </StyledHero>
  );
};

export default Hero;
