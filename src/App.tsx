import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import NavigationBar from "./views/NavigationBar";
import Home from "./views/Home/Home";
import MovieDetailsPage from "./views/Movies/MovieDetailsPage";
import DramaDetailsPage from "./views/Drama/DramaDetailsPage";
import MovieNowPlaying from "./views/Movies/MovieNowPlaying";
import DramaNowPlaying from "./views/Drama/DramaNowPlaying";
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
        <Route path={RouterConst.MOVIE_NOW_PLAYING} element={<MovieNowPlaying />} />
        <Route path={RouterConst.DRAMA_NOW_PLAYING} element={<DramaNowPlaying />} />
        <Route path={RouterConst.MOVIE_TOP_RATED} element={<DramaNowPlaying />} />
        <Route path={RouterConst.DRAMA_TOP_RATED} element={<DramaNowPlaying />} />
      </Routes>
      <Grid className="common--padding-top">
        <Grid className="home--footer">{HomeTxt.footer}</Grid>
      </Grid>
    </Router>
  );
};

export default App;
