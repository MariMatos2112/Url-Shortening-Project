import { useEffect, useState } from "react";
import BoostLinks from "./Sections/BoostLinks";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Statistics from "./Sections/Statistics";
import Axios from "axios";
import ModalBox from "./Components/ModalBox";
import useClipboard from "react-use-clipboard";

function App() {
  const [link, setLink] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [isCopied, setCopied] = useClipboard(link, {
    successDuration: 1000,
  });

  useEffect(() => {
    Axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((response) => {
        setLink(response.data.result.short_link);
        setOriginalLink(response.data.result.original_link);
      })
      .catch((error) => console.log(error));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setLink("");
        setOriginalLink("");
      }
    });
  }, [link, originalLink]);

  return (
    <div>
      <Hero getLink={(e) => setLink(e)} />
      <Statistics />
      <BoostLinks />
      <Footer />
      {link ? (
        <ModalBox
          originalLink={originalLink}
          shortenedLink={link}
          copyLink={() => setCopied(link)}
          closeModal={() => {
            setLink("");
            setOriginalLink("");
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
