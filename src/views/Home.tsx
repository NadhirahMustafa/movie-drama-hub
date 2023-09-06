import React from "react";
import { Grid } from "@mui/material";
import Trending from "./Trending";
import Popular from "./Popular";
import OnAir from "./OnAir";
import { HomeTxt } from "../constant/text";
import "../styles/Views.scss";

const Home: React.FC = () => {
  return (
    <>
      <Grid className="home--header">
        <Grid className="home--header-title">
          {HomeTxt.title}
        </Grid>
        <Grid className="home--header-message">
          {HomeTxt.header_message}
        </Grid>
      </Grid>
      <OnAir />
      <Trending />
      <Popular />
    </>
  );
};

export default Home;
