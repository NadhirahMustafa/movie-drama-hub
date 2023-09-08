import React from "react";
import { Button, Grid } from "@mui/material";
import { CommonTxt } from "../constant/text";
import "../styles/Component.scss";

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Grid className="button--color">{CommonTxt.loadMore}</Grid>
    </Button>
  );
};

export default LoadMoreButton;
