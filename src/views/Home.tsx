import React from "react";
import { Grid } from "@mui/material";
import { home } from "../constant/message";
import "../styles/Views.scss";

const Home: React.FC = () => {
  return (
    <>
      <Grid className="home--header-image">
          <Grid className="home--header-text home--header-title">
            {home.title}
          </Grid>
          <Grid className="home--header-text home--header-message">
            {home.header_message}
          </Grid>
        </Grid>

      <Grid className="home--footer">{home.footer}</Grid>
    </>
  );
};

export default Home;
