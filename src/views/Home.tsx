import React from "react";
import { Grid } from "@mui/material";
import { home } from "../constant/message";
import Trending from "./Trending";
import "../styles/Views.scss";
import PopularPage from "./Popular";

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

      <Trending />
      <PopularPage />

      <Grid className="common--padding-top">
        <Grid className="home--footer">{home.footer}</Grid>
      </Grid>
    </>
  );
};

export default Home;
