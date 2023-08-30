import React from "react";
import { Grid } from "@mui/material";
import { PageTitleProps } from "../interface/component.interface";
import "../styles/Component.scss";

const PageTitle: React.FC<PageTitleProps> = ({ children, title }) => {
  return (
    <Grid className="page-title--title">
      {title}
      {children}
    </Grid>
  );
};

export default PageTitle;
