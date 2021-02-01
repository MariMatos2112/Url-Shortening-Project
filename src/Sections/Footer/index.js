import React from "react";
import LinksColumn from "../../Components/LinksColumn";
import { StyledFooter } from "./styles";
import FacebookLogo from "../../Images/icon-facebook.svg";
import TwitterLogo from "../../Images/icon-twitter.svg";
import PinterestLogo from "../../Images/icon-pinterest.svg";
import InstagramLogo from "../../Images/icon-instagram.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Carrers", "Contract"],
    },
  ];

  const socialLinks = [
    {
      socialMedia: "Facebook",
      link: "https://www.facebook.com/",
      img: FacebookLogo,
    },
    {
      socialMedia: "Twitter",
      link: "https://www.twitter.com/",
      img: TwitterLogo,
    },
    {
      socialMedia: "Pinterest",
      link: "https://www.pinterest.com/",
      img: PinterestLogo,
    },
    {
      socialMedia: "Instagram",
      link: "https://www.instagram.com/",
      img: InstagramLogo,
    },
  ];

  return (
    <StyledFooter>
      <h4>Shortly</h4>

      {footerLinks.map((col) => (
        <LinksColumn title={col.title} links={col.links} />
      ))}

      <div className="SocialContainer">
        {socialLinks.map((icon) => (
          <a href={icon.link} target="_blank">
            <img src={icon.img} alt={`${icon.socialMedia} link`} />
          </a>
        ))}
      </div>
    </StyledFooter>
  );
};

export default Footer;
