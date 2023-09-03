import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./constant/constants";
import NavigationBar from "./views/NavigationBar";
import Home from "../src/views/Home";
import MovieDetailsPage from "./views/MovieDetailsPage";
import DramaDetailsPage from "./views/DramaDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path={router.HOME} element={<Home />} />
        <Route path={router.MOVIE_DETAILS} element={<MovieDetailsPage />} />
        <Route path={router.DRAMA_DETAILS} element={<DramaDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
