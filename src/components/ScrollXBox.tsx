import React from "react";
import { Grid } from "@mui/material";
import { ComponentProps } from "../interface/component.interface";
import "../styles/Views.scss";

const ScrollXBox: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Grid className="app--content-border common-component--page-padding">
      {children}
    </Grid>
  );
};

export default ScrollXBox;
