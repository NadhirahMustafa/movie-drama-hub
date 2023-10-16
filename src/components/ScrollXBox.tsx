import React from "react";
import { Grid } from "@mui/material";
import { ComponentProps } from "../interface/component.interface";
import "../styles/Component.scss";

const ScrollXBox: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Grid className="scrollx-box--content-border">
      {children}
    </Grid>
  );
};

export default ScrollXBox;
