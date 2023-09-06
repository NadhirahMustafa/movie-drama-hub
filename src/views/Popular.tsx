import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { getPopularMovies, getPopularDrama } from "../services/api.service";
import {
  popularMoviesInterface,
  popularDramaInterface,
} from "../interface/interface";
import { setSelectedDramaData, setSelectedMovieData } from "../actions/DataActions";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";
import { RouterConst, ShowTypeConst } from "../constant/constants";
import { CommonTxt, PopularTxt } from "../constant/text";

const Popular: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [popularMovieList, setPopularMovieList] = useState<popularMoviesInterface[]>([]);
  const [popularDramaList, setPopularDramaList] = useState<popularDramaInterface[]>([]);
  const [movieList, setMovieList] = useState<popularMoviesInterface[]>([]);
  const [dramaList, setDramaList] = useState<popularDramaInterface[]>([]);
  const [showType, setShowType] = useState("");

  const fetchPopularMovies = async () => {
    let res = await getPopularMovies();
    if (res) {
      setMovieList(res);
      setPopularMovieList(res);
      setShowType(ShowTypeConst.MOVIE);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularDrama = async () => {
    let res = await getPopularDrama();
    if (res) {
      setPopularDramaList(res);
    } else {
      alert(CommonTxt.alertMessage);
    }
  };

  useEffect(() => {
    fetchPopularDrama();
  }, []);

  const handleMovieList = () => {
    setMovieList(popularMovieList);
    setShowType(ShowTypeConst.MOVIE);
  };

  const handleDramaList = () => {
    setDramaList(popularDramaList);
    setShowType(ShowTypeConst.DRAMA);
  };

  const onClickCellMovie = (c: popularMoviesInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(RouterConst.MOVIE_DETAILS);
  };

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(RouterConst.DRAMA_DETAILS);
  };

  const renderShowType = (
    <Grid container>
      <Grid item>
        <Button onClick={handleMovieList}>
          <p
            className={`popular--button ${
              showType === ShowTypeConst.MOVIE
                ? "common--button-active "
                : ""
            }`}
          >
            {PopularTxt.movie}
          </p>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={handleDramaList}>
          <p
            className={`popular--button ${
              showType === ShowTypeConst.DRAMA
                ? "common--button-active "
                : ""
            }`}
          >
            {PopularTxt.drama}
          </p>
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <PageContent>
      <PageTitle title={PopularTxt.title}>{renderShowType}</PageTitle>
      <ScrollBox>
        {showType === ShowTypeConst.MOVIE
          ? movieList.map((row: popularMoviesInterface, index: number) => (
              <DataDisplay
                src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
                title={row.title}
                key={index}
                dataPopularMovie={row}
                onClickPopularMovie={() => onClickCellMovie(row)}
              />
            ))
          : dramaList.map((row: popularDramaInterface, index: number) => (
              <DataDisplay
                src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
                title={row.original_name}
                key={index}
                dataPopularDrama={row}
                onClickPopularDrama={() => onClickCellDrama(row)}
              />
            ))}
      </ScrollBox>
    </PageContent>
  );
};

export default Popular;
