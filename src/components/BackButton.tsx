import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { common } from "../constant/message";
import { router } from "../constant/constants";
import "../styles/Component.scss";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(router.HOME);
  };

  return <Button onClick={handleBack}>{common.back}</Button>;
};

export default BackButton;
