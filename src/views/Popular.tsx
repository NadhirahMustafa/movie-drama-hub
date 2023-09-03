import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import { getPopularMovies, getPopularDrama } from "../services/api.service";
import {
  popularMoviesInterface,
  popularDramaInterface,
} from "../interface/interface";
import { setSelectedDramaData, setSelectedMovieData } from "../redux/actions";
import { common, popular } from "../constant/message";
import { router, showTypeConstant } from "../constant/constants";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";

const Popular: React.FC = () => {
  const [popularMovieList, setPopularMovieList] = useState<
    popularMoviesInterface[]
  >([]);
  const [popularDramaList, setPopularDramaList] = useState<
    popularDramaInterface[]
  >([]);
  const [list1, setList1] = useState<popularMoviesInterface[]>([]);
  const [list2, setList2] = useState<popularDramaInterface[]>([]);
  const [showType, setShowType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPopularMovies = async () => {
    let res = await getPopularMovies();
    if (res) {
      setList1(res);
      setPopularMovieList(res);
      setShowType(showTypeConstant.MOVIE);
    } else {
      alert(common.alertMessage);
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
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchPopularDrama();
  }, []);

  const handleMovieList = () => {
    setList1(popularMovieList);
    setShowType(showTypeConstant.MOVIE);
  };

  const handleDramaList = () => {
    setList2(popularDramaList);
    setShowType(showTypeConstant.DRAMA);
  };

  const onClickCellMovie = (c: popularMoviesInterface) => {
    dispatch(setSelectedMovieData(c));
    navigate(router.MOVIE_DETAILS);
  };

  const onClickCellDrama = (c: popularDramaInterface) => {
    dispatch(setSelectedDramaData(c));
    navigate(router.DRAMA_DETAILS);
  };

  const renderShowType = (
    <Grid container>
      <Grid item>
        <Button onClick={handleMovieList}>
          <p
            className={`popular--button ${
              showType === showTypeConstant.MOVIE
                ? "common--button-active "
                : ""
            }`}
          >
            {popular.movie}
          </p>
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={handleDramaList}>
          <p
            className={`popular--button ${
              showType === showTypeConstant.DRAMA
                ? "common--button-active "
                : ""
            }`}
          >
            {popular.drama}
          </p>
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <PageContent>
      <PageTitle title={popular.title}>{renderShowType}</PageTitle>
      <ScrollBox>
        {showType === showTypeConstant.MOVIE
          ? list1.map((row: popularMoviesInterface, index: number) => (
              <DataDisplay
                src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
                title={row.title}
                key={index}
                dataPopularMovie={row}
                onClickPopularMovie={() => onClickCellMovie(row)}
              />
            ))
          : list2.map((row: popularDramaInterface, index: number) => (
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
