import React from "react";
import { StyledNavbar } from "./styles";
import Logo from "../../Images/logo.svg";
import Button from '../Button';

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="LeftBox">
        <img src={Logo} alt="Shortly Logo" />
        <button>Features</button>
        <button>Pricing</button>
        <button>Resources</button>
      </div>
      <div className="RightBox">
        <button>Login</button>
        <Button label="Sign Up"/>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
