import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import NavigationBar from "./views/NavigationBar";
import Home from "../src/views/Home";
import MovieDetailsPage from "./views/MovieDetailsPage";
import DramaDetailsPage from "./views/DramaDetailsPage";
import NowPlaying from "./views/NowPlaying";
import { RouterConst } from "./constant/constants";
import { HomeTxt } from "./constant/text";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path={RouterConst.HOME} element={<Home />} />
        <Route
          path={RouterConst.MOVIE_DETAILS}
          element={<MovieDetailsPage />}
        />
        <Route
          path={RouterConst.DRAMA_DETAILS}
          element={<DramaDetailsPage />}
        />
        <Route path={RouterConst.NOW_PLAYING} element={<NowPlaying />} />
      </Routes>
      <Grid className="common--padding-top">
        <Grid className="home--footer">{HomeTxt.footer}</Grid>
      </Grid>
    </Router>
  );
};

export default App;
