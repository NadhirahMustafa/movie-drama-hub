import React from "react";
import { Button, Grid } from "@mui/material";
import { CommonButtonInterface } from "../interface/component.interface";
import "../styles/Component.scss";

const CommonButton: React.FC<CommonButtonInterface> = ({
  title,
  onClick,
  className,
}) => {
  return (
    <Button onClick={onClick}>
      <Grid className={`button--color button--padding ${className}`}>
        {title}
      </Grid>
    </Button>
  );
};

export default CommonButton;
