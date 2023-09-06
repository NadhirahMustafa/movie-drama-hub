import React from "react";
import { Grid } from "@mui/material";
import { ComponentProps } from "../interface/component.interface";
import "../styles/Component.scss";

const ScrollBox: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Grid className="scroll-box--scroll-box">
      <Grid className="scroll-box--card-arr">{children}</Grid>
    </Grid>
  );
};

export default ScrollBox;
