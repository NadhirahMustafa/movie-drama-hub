import React from "react";
import { Grid } from "@mui/material";
import { ComponentProps } from "../interface/component.interface";
import "../styles/Component.scss";

const ContentBox: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Grid className="content-box--content-border common-component--page-padding">
      {children}
    </Grid>
  );
};

export default ContentBox;
