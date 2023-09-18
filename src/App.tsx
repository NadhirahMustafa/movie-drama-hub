import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";
import NavigationBar from "./views/NavigationBar";
import Home from "./views/Home/Home";
import MovieDetailsPage from "./views/Movies/MovieDetailsPage";
import DramaDetailsPage from "./views/Drama/DramaDetailsPage";
import NowPlayingMovie from "./views/Movies/NowPlayingMovie";
import NowPlayingDrama from "./views/Drama/NowPlayingDrama";
import TopRatedMovie from "./views/Movies/TopRatedMovie";
import TopRatedDrama from "./views/Drama/TopRatedDrama";
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
        <Route path={RouterConst.MOVIE_NOW_PLAYING} element={<NowPlayingMovie />} />
        <Route path={RouterConst.DRAMA_NOW_PLAYING} element={<NowPlayingDrama />} />
        <Route path={RouterConst.MOVIE_TOP_RATED} element={<TopRatedMovie />} />
        <Route path={RouterConst.DRAMA_TOP_RATED} element={<TopRatedDrama />} />
      </Routes>
      <Grid className="common--padding-top">
        <Grid className="home--footer">{HomeTxt.footer}</Grid>
      </Grid>
    </Router>
  );
};

export default App;
