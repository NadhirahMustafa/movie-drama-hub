import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "../styles/Component.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid>
      {isVisible && (
        <Button className="scroll-to-top--button" onClick={scrollToTop}>
          <ArrowUpwardIcon className="scroll-to-top--arrow"/>
        </Button>
      )}
    </Grid>
  );
};

export default ScrollToTop;
