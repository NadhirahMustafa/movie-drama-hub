import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { common } from "../constant/message";
import { router } from "../constant/constants";
import "../styles/Component.scss";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(router.HOME);
  };

  return <Button onClick={handleBack}><Grid className="button--color">{common.back}</Grid></Button>;
};

export default BackButton;
