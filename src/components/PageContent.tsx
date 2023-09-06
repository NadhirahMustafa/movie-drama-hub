import React from "react";
import { Grid } from "@mui/material";
import { ComponentProps } from "../interface/component.interface";
import "../styles/Component.scss";

const PageContent: React.FC<ComponentProps> = ({ children }) => {
  return (
    <Grid className="common-component--page-padding">
      {children}
    </Grid>
  );
};

export default PageContent;
