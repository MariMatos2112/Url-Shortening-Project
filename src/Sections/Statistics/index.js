import React from "react";
import Card from "../../Components/Card";
import { StyledStatistics } from "./styles";
import BrandRecognitionIcon from "../../Images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../Images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../Images/icon-fully-customizable.svg";

const Statistics = () => {
  const cardsInfo = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with one click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: BrandRecognitionIcon,
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: DetailedRecordsIcon,
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging, audience engagement.",
      icon: FullyCustomizableIcon,
    },
  ];

  return (
    <StyledStatistics>
      <div className="TextBox">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="CardBox">
        <div className="line"></div>
        {cardsInfo.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            order={index}
          />
        ))}
      </div>
    </StyledStatistics>
  );
};

export default Statistics;
