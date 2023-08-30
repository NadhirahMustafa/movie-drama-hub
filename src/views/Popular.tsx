import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { getPopularMovies, getPopularDrama } from "../services/api.service";
import { movieInterface } from "../interface/interface";
import { common, popular } from "../constant/message";
import { showTypeConstant } from "../constant/constants";
import DataDisplay from "../components/DataDisplay";
import ScrollBox from "../components/ScrollBox";
import PageTitle from "../components/PageTitle";
import PageContent from "../components/PageContent";

const Popular: React.FC = () => {
  const [popularMovieList, setPopularMovieList] = useState<movieInterface[]>(
    []
  );
  const [popularDramaList, setPopularDramaList] = useState<movieInterface[]>(
    []
  );
  const [list, setList] = useState<movieInterface[]>([]);
  const [showType, setShowType] = useState("");

  const fetchPopularMovies = async () => {
    let res = await getPopularMovies();
    if (res) {
      setList(res);
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
    setList(popularMovieList);
    setShowType(showTypeConstant.MOVIE);
  };

  const handleDramaList = () => {
    setList(popularDramaList);
    setShowType(showTypeConstant.DRAMA);
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
      <PageTitle title={popular.title}>
        {renderShowType}
      </PageTitle>
      <ScrollBox>
        {list.map((row: movieInterface, index: number) => (
          <DataDisplay
            src={`https://image.tmdb.org/t/p/original${row.poster_path}`}
            alt="image not found"
            title={row.title || row.original_name}
            key={index}
          />
        ))}
      </ScrollBox>
    </PageContent>
  );
};

export default Popular;
