import React from "react";
import { Button, Grid } from "@mui/material";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

const BackButton: React.FC = () => {

  const handleBack = () => {
    window.history.back();
  };

  return <Button onClick={handleBack}><Grid className="button--color">{CommonTxt.back}</Grid></Button>;
};

export default BackButton;
